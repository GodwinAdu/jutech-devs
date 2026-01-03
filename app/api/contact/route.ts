import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const createThankYouTemplate = (name: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You - JuTech Devs</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
      <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600;">JuTech Devs</h1>
      <p style="color: #e2e8f0; margin: 10px 0 0 0; font-size: 16px;">Modern Development Solutions</p>
    </div>
    <div style="padding: 40px 30px;">
      <h2 style="color: #1a202c; margin: 0 0 20px 0; font-size: 24px; font-weight: 600;">Thank You, ${name}!</h2>
      <p style="color: #4a5568; line-height: 1.6; margin: 0 0 20px 0; font-size: 16px;">We've received your message and appreciate you reaching out to us. Our team will review your inquiry and get back to you within 24 hours.</p>
      <div style="background-color: #f7fafc; border-left: 4px solid #667eea; padding: 20px; margin: 30px 0;">
        <h3 style="color: #2d3748; margin: 0 0 10px 0; font-size: 18px;">What's Next?</h3>
        <ul style="color: #4a5568; margin: 0; padding-left: 20px; line-height: 1.6;">
          <li>Our team will review your message</li>
          <li>We'll respond within 24 hours</li>
          <li>Follow up questions? Just reply to this email</li>
        </ul>
      </div>
      <div style="text-align: center; margin: 30px 0;">
        <a href="https://jutechhub.com" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; padding: 12px 30px; border-radius: 6px; font-weight: 600;">Visit Our Website</a>
      </div>
    </div>
    <div style="background-color: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
      <p style="color: #718096; margin: 0 0 10px 0; font-size: 14px;">Follow us for updates:</p>
      <div style="margin: 15px 0;">
        <a href="https://chat.whatsapp.com/LvVabBsrKbBHwx0QvoxdSi" style="color: #667eea; text-decoration: none; margin: 0 10px;">WhatsApp</a>
        <a href="https://discord.gg/KbfyAkKxE" style="color: #667eea; text-decoration: none; margin: 0 10px;">Discord</a>
      </div>
      <p style="color: #a0aec0; margin: 10px 0 0 0; font-size: 12px;">© 2024 JuTech Devs. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;

export async function POST(request: NextRequest) {
  try {
    const { name, email, message, subject } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS
    ) {
      throw new Error("SMTP environment variables not configured");
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.verify();

    // Send notification to admin
    await transporter.sendMail({
      from: `${process.env.FROM_NAME || "Website"} <${process.env.FROM_EMAIL || process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: subject?.slice(0, 120) || `Contact Form: ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject || "No subject")}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message)}</p>
      `,
    });

    // Send thank you email to sender
    await transporter.sendMail({
      from: `${process.env.FROM_NAME || "JuTech Devs"} <${process.env.FROM_EMAIL || process.env.SMTP_USER}>`,
      to: email,
      subject: `Thank you for contacting JuTech Devs, ${name}!`,
      html: createThankYouTemplate(escapeHtml(name)),
    });

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string) {
  return text.replace(/[&<>"']/g, (char) => {
    const map: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };
    return map[char];
  });
}
