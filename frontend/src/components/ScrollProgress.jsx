import React, { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollValue = windowHeight > 0 ? (totalScroll / windowHeight) * 100 : 0;
      setProgress(scrollValue);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[100] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-[#8B0000] via-[#FF3030] to-[#FF4545] shadow-[0_0_12px_#FF3030] transition-all duration-75"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
