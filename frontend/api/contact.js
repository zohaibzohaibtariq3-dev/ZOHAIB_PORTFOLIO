export default async function handler(req, res) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      body = {};
    }
  }

  const { name, email, subject, message } = body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  const recipientEmail = process.env.CONTACT_RECEIVER_EMAIL || "zohaibzohaibtariq3@gmail.com";
  let emailSent = false;
  let deliveryMethod = "mock";

  // 1. Try Resend API if RESEND_API_KEY is configured
  if (process.env.RESEND_API_KEY) {
    try {
      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY.trim()}`
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM || "Portfolio Contact <onboarding@resend.dev>",
          to: recipientEmail,
          reply_to: email,
          subject: `Portfolio Inquiry: ${subject || "New Message from " + name}`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
              <h2 style="color: #FF3030;">New Portfolio Message</h2>
              <p><strong>From:</strong> ${name} (&lt;${email}&gt;)</p>
              <p><strong>Subject:</strong> ${subject || "N/A"}</p>
              <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px 0;" />
              <p style="white-space: pre-wrap; font-size: 16px; color: #333;">${message}</p>
            </div>
          `
        })
      });

      if (resendRes.ok) {
        emailSent = true;
        deliveryMethod = "resend";
      } else {
        const errText = await resendRes.text();
        console.error("Resend API failed:", errText);
      }
    } catch (err) {
      console.error("Resend error:", err);
    }
  }

  // 2. Try Nodemailer if SMTP credentials are provided
  if (!emailSent && process.env.SMTP_USER && process.env.SMTP_PASS) {
    try {
      const nodemailer = await import("nodemailer");
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: parseInt(process.env.SMTP_PORT || "465", 10),
        secure: (process.env.SMTP_PORT || "465") === "465",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      });

      await transporter.sendMail({
        from: `"${name}" <${process.env.SMTP_USER}>`,
        to: recipientEmail,
        replyTo: email,
        subject: `Portfolio Contact: ${subject || "New Message from " + name}`,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
            <h2 style="color: #FF3030;">New Portfolio Message</h2>
            <p><strong>From:</strong> ${name} (&lt;${email}&gt;)</p>
            <p><strong>Subject:</strong> ${subject || "N/A"}</p>
            <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px 0;" />
            <p style="white-space: pre-wrap; font-size: 16px; color: #333;">${message}</p>
          </div>
        `
      });

      emailSent = true;
      deliveryMethod = "nodemailer";
    } catch (err) {
      console.error("Nodemailer error:", err);
    }
  }

  // 3. Try Web3Forms if WEB3FORMS_ACCESS_KEY is provided
  if (!emailSent && process.env.WEB3FORMS_ACCESS_KEY) {
    try {
      const web3Res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.WEB3FORMS_ACCESS_KEY,
          name: name,
          email: email,
          subject: `Portfolio Contact: ${subject || name}`,
          message: message,
          from_name: "Portfolio Visitor"
        })
      });

      if (web3Res.ok) {
        emailSent = true;
        deliveryMethod = "web3forms";
      }
    } catch (err) {
      console.error("Web3Forms error:", err);
    }
  }

  console.log(`Contact message received from ${name} (${email}). Delivery status: ${emailSent ? deliveryMethod : 'logged'}`);

  return res.status(200).json({
    success: true,
    delivered: emailSent,
    method: deliveryMethod,
    message: emailSent
      ? `Thank you ${name}! Your email has been delivered directly to Zohaib's inbox.`
      : `Thank you ${name}! Your message has been received. Zohaib will get back to you shortly.`
  });
}
