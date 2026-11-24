import React, { useRef, useEffect } from 'react';

export default function NeuralSphere() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement.clientHeight || 500);

    // Number of nodes in the neural sphere
    const nodeCount = 90;
    const radius = Math.min(width, height) * 0.38;

    // Create 3D points using Fibonacci Sphere distribution
    const nodes = [];
    for (let i = 0; i < nodeCount; i++) {
      const y = 1 - (i / (nodeCount - 1)) * 2; // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y);
      const phi = i * 2.399963229728653; // golden angle in radians

      const x = Math.cos(phi) * radiusAtY;
      const z = Math.sin(phi) * radiusAtY;

      nodes.push({
        baseX: x * radius,
        baseY: y * radius,
        baseZ: z * radius,
        x: x * radius,
        y: y * radius,
        z: z * radius,
        size: Math.random() * 2 + 2,
        pulseSpeed: Math.random() * 0.03 + 0.02,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    // Rotation angles
    let angleX = 0.002;
    let angleY = 0.003;
    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - width / 2;
      const mouseY = e.clientY - rect.top - height / 2;
      targetRotY = (mouseX / width) * 0.8;
      targetRotX = -(mouseY / height) * 0.8;
    };

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);
    const parent = canvas.parentElement;
    parent.addEventListener('mousemove', handleMouseMove);

    let tick = 0;

    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse parallax
      currentRotX += (targetRotX - currentRotX) * 0.05;
      currentRotY += (targetRotY - currentRotY) * 0.05;

      // Base auto rotation + mouse interaction
      const rotY = 0.004 + currentRotY * 0.02;
      const rotX = 0.002 + currentRotX * 0.02;

      // Project and draw
      const projectedNodes = [];
      const cx = width / 2;
      const cy = height / 2;
      const fov = 400;

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // 3D Rotation along Y
        let cosY = Math.cos(rotY);
        let sinY = Math.sin(rotY);
        let x1 = node.x * cosY - node.z * sinY;
        let z1 = node.z * cosY + node.x * sinY;

        // 3D Rotation along X
        let cosX = Math.cos(rotX);
        let sinX = Math.sin(rotX);
        let y1 = node.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + node.y * sinX;

        node.x = x1;
        node.y = y1;
        node.z = z2;

        // Perspective projection
        const scale = fov / (fov + z2 + radius * 1.2);
        const projX = cx + x1 * scale;
        const projY = cy + y1 * scale;
        const alpha = Math.max(0.15, (z2 + radius) / (2 * radius));

        projectedNodes.push({
          x: projX,
          y: projY,
          z: z2,
          scale,
          alpha,
          size: node.size * scale,
          pulse: Math.sin(tick * node.pulseSpeed + node.pulsePhase),
        });
      }

      // Draw Synaptic Connections (lines between nearby nodes)
      ctx.lineWidth = 0.8;
      for (let i = 0; i < projectedNodes.length; i++) {
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const p1 = projectedNodes[i];
          const p2 = projectedNodes[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const maxDist = 75 * ((p1.scale + p2.scale) / 2);
          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * Math.min(p1.alpha, p2.alpha) * 0.35;
            ctx.strokeStyle = `rgba(255, 48, 48, ${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Draw Center Glow Core
      const coreGradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius * 0.6);
      coreGradient.addColorStop(0, 'rgba(255, 48, 48, 0.25)');
      coreGradient.addColorStop(0.5, 'rgba(180, 20, 20, 0.08)');
      coreGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = coreGradient;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 0.6, 0, Math.PI * 2);
      ctx.fill();

      // Draw Nodes
      for (let i = 0; i < projectedNodes.length; i++) {
        const p = projectedNodes[i];
        const pulseSize = p.size * (1 + p.pulse * 0.35);

        // Outer glow
        ctx.fillStyle = `rgba(255, 48, 48, ${p.alpha * 0.85})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, pulseSize, 0, Math.PI * 2);
        ctx.fill();

        // Bright Core
        if (p.z > 0) {
          ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, Math.max(1, pulseSize * 0.4), 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (parent) parent.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[540px] flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="w-full h-full block cursor-grab active:cursor-grabbing"
      />
    </div>
  );
}
