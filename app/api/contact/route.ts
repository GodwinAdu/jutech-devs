import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { rateLimit } from "@/lib/rate-limit";
import { sanitizeInput, detectSqlInjection, detectXSS, validateEmail } from "@/lib/security";
import { validateCSRFToken } from "@/lib/csrf";
import { securityHeaders } from "@/lib/security-headers";

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
    // Apply rate limiting
    const rateLimitResult = rateLimit(3, 60000)(request); // 3 requests per minute
    if (rateLimitResult) {
      return securityHeaders(rateLimitResult);
    }

    const { name, email, message, subject, company, phone, inquiryType } = await request.json();

    // Validate CSRF token
    const csrfToken = request.headers.get('x-csrf-token');
    if (!csrfToken || !validateCSRFToken(csrfToken)) {
      return securityHeaders(NextResponse.json(
        { error: "Invalid security token" },
        { status: 403 }
      ));
    }

    // Validate required fields
    if (!name || !email || !message || !subject || !inquiryType) {
      return securityHeaders(NextResponse.json(
        { error: "Please fill in all required fields" },
        { status: 400 }
      ));
    }

    // Validate email format
    if (!validateEmail(email)) {
      return securityHeaders(NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      ));
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      message: sanitizeInput(message),
      subject: sanitizeInput(subject),
      company: company ? sanitizeInput(company) : '',
      phone: phone ? sanitizeInput(phone) : '',
      inquiryType: sanitizeInput(inquiryType)
    };

    // Security checks
    const inputs = [sanitizedData.name, sanitizedData.message, sanitizedData.subject];
    for (const input of inputs) {
      if (detectSqlInjection(input) || detectXSS(input)) {
        return securityHeaders(NextResponse.json(
          { error: "Invalid input detected" },
          { status: 400 }
        ));
      }
    }

    // Validate message length
    if (sanitizedData.message.length < 10 || sanitizedData.message.length > 1000) {
      return securityHeaders(NextResponse.json(
        { error: "Message must be between 10 and 1000 characters" },
        { status: 400 }
      ));
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

    // Format inquiry type for display
    const inquiryTypeLabels: Record<string, string> = {
      general: "General Inquiry",
      development: "Custom Development",
      consultation: "Technical Consultation",
      support: "Support & Maintenance",
      partnership: "Partnership Opportunity"
    };

    const budgetLabels: Record<string, string> = {
      "under-5k": "Under $5,000",
      "5k-15k": "$5,000 - $15,000",
      "15k-50k": "$15,000 - $50,000",
      "50k-plus": "$50,000+",
      "not-sure": "Not sure yet"
    };

    // Send notification to admin
    await transporter.sendMail({
      from: `${process.env.FROM_NAME || "Jutech Contact"} <${process.env.FROM_EMAIL || process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: `[${inquiryTypeLabels[inquiryType] || inquiryType}] ${subject.slice(0, 100)}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          </div>
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <div style="margin-bottom: 20px; padding: 15px; background-color: #f1f5f9; border-radius: 8px;">
              <h2 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px;">Contact Information</h2>
              <p style="margin: 5px 0; color: #475569;"><strong>Name:</strong> ${escapeHtml(name)}</p>
              <p style="margin: 5px 0; color: #475569;"><strong>Email:</strong> ${escapeHtml(email)}</p>
              ${company ? `<p style="margin: 5px 0; color: #475569;"><strong>Company:</strong> ${escapeHtml(company)}</p>` : ''}
              ${phone ? `<p style="margin: 5px 0; color: #475569;"><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ''}
            </div>
            
            <div style="margin-bottom: 20px; padding: 15px; background-color: #eff6ff; border-radius: 8px;">
              <h2 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px;">Project Details</h2>
              <p style="margin: 5px 0; color: #475569;"><strong>Inquiry Type:</strong> ${inquiryTypeLabels[inquiryType] || inquiryType}</p>
              <p style="margin: 5px 0; color: #475569;"><strong>Subject:</strong> ${escapeHtml(subject)}</p>
            </div>
            
            <div style="margin-bottom: 20px; padding: 15px; background-color: #f0fdf4; border-radius: 8px;">
              <h2 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px;">Message</h2>
              <p style="color: #475569; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
              <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: 600;">Reply to ${escapeHtml(name)}</a>
            </div>
          </div>
        </div>
      `,
    });

    // Send thank you email to sender
    await transporter.sendMail({
      from: `${process.env.FROM_NAME || "Jutech Team"} <${process.env.FROM_EMAIL || process.env.SMTP_USER}>`,
      to: email,
      subject: `Thank you for contacting Jutech, ${name}!`,
      html: createThankYouTemplate(escapeHtml(name)),
    });

    return NextResponse.json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
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
