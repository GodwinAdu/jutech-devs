import nodemailer from 'nodemailer'

interface EmailOptions {
  to: string
  subject: string
  html: string
  text?: string
}

class EmailService {
  private transporter: nodemailer.Transporter

  constructor() {
    const port = parseInt(process.env.SMTP_PORT || '587')
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: port,
      secure: port === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })
  }

  async sendEmail({ to, subject, html, text }: EmailOptions) {
    try {
      const info = await this.transporter.sendMail({
        from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
        to,
        subject,
        text,
        html,
      })

      console.log('Email sent:', info.messageId)
      return { success: true, messageId: info.messageId }
    } catch (error) {
      console.error('Email send failed:', error)
      return { success: false, error: (error as Error).message }
    }
  }

  async sendWelcomeEmail(to: string, name: string) {
    const subject = 'Welcome to JuTech Devs Community!'
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Welcome to JuTech Devs</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #2563eb;">Welcome to JuTech Devs!</h1>
            </div>
            
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2>Hi ${name}! 👋</h2>
              <p>Welcome to the JuTech Devs community! We're excited to have you join our growing family of developers.</p>
            </div>

            <div style="margin-bottom: 20px;">
              <h3>What's Next?</h3>
              <ul>
                <li>🌐 Explore our <strong>Web Development</strong> services</li>
                <li>📱 Check out our <strong>Mobile Apps</strong> solutions</li>
                <li>🛠️ Try our <strong>Developer Tools</strong> and SDKs</li>
                <li>🎯 Use our <strong>Code Playground</strong> for testing</li>
                <li>📚 Learn with our <strong>Programming Academy</strong></li>
              </ul>
            </div>

            <div style="text-align: center; margin: 30px 0;">
              <a href="${process.env.NEXTAUTH_URL}/community" 
                 style="background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
                Visit Community
              </a>
            </div>

            <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; text-align: center; color: #6b7280; font-size: 14px;">
              <p>Best regards,<br>The JuTech Devs Team</p>
              <p>If you have any questions, feel free to contact us at support@jutechdevs.com</p>
            </div>
          </div>
        </body>
      </html>
    `

    return this.sendEmail({ to, subject, html })
  }

  async sendPasswordResetEmail(to: string, name: string, resetToken: string) {
    const resetUrl = `${process.env.NEXTAUTH_URL}/reset-password?token=${resetToken}`
    const subject = 'Reset Your Password - JuTech Devs'
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Reset Your Password</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #dc2626;">Password Reset Request</h1>
            </div>
            
            <div style="background: #fef2f2; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #dc2626;">
              <h2>Hi ${name},</h2>
              <p>We received a request to reset your password for your JuTech Devs account.</p>
            </div>

            <div style="text-align: center; margin: 30px 0;">
              <a href="${resetUrl}" 
                 style="background: #dc2626; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
                Reset Password
              </a>
            </div>

            <div style="background: #f3f4f6; padding: 15px; border-radius: 6px; margin: 20px 0;">
              <p style="margin: 0; font-size: 14px;"><strong>Security Note:</strong> This link will expire in 1 hour. If you didn't request this reset, please ignore this email.</p>
            </div>

            <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; text-align: center; color: #6b7280; font-size: 14px;">
              <p>Best regards,<br>The JuTech Devs Team</p>
            </div>
          </div>
        </body>
      </html>
    `

    return this.sendEmail({ to, subject, html })
  }
  async sendNewsletterEmail(to: string, subject: string, sections: any[], template: string = 'newsletter') {
    const templateStyles = {
      announcement: { color: '#059669', icon: '📢', bg: '#ecfdf5' },
      update: { color: '#2563eb', icon: '🔄', bg: '#eff6ff' },
      newsletter: { color: '#7c3aed', icon: '📰', bg: '#f3e8ff' },
      promotion: { color: '#dc2626', icon: '🎉', bg: '#fef2f2' }
    }
    
    const style = templateStyles[template as keyof typeof templateStyles] || templateStyles.newsletter
    
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${subject}</title>
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #374151; margin: 0; padding: 0; background: #f9fafb;">
          <div style="max-width: 600px; margin: 0 auto; background: white; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%); padding: 40px 20px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700;">JuTech Devs</h1>
              <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 16px;">Building the Future of Technology</p>
            </div>
            
            <!-- Content -->
            <div style="padding: 40px 30px;">
              <div style="background: ${style.bg}; padding: 20px; border-radius: 12px; border-left: 4px solid ${style.color}; margin-bottom: 30px;">
                <h2 style="color: ${style.color}; margin: 0 0 10px 0; font-size: 24px; display: flex; align-items: center; gap: 10px;">
                  <span style="font-size: 28px;">${style.icon}</span>
                  ${subject}
                </h2>
              </div>

              <div style="color: #374151; line-height: 1.8; font-size: 16px;">
                ${sections.map(section => {
                  if (section.type === 'heading') {
                    return `<h3 style="color: #1f2937; font-size: 20px; font-weight: 600; margin: 24px 0 12px 0;">${section.content}</h3>`
                  } else {
                    return `<p style="margin: 0 0 16px 0;">${section.content.replace(/\n/g, '<br>')}</p>`
                  }
                }).join('')}
              </div>

              <!-- CTA Section -->
              <div style="text-align: center; margin: 40px 0;">
                <a href="${process.env.NEXTAUTH_URL}" 
                   style="background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%); color: white; padding: 16px 32px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: 600; font-size: 16px; box-shadow: 0 4px 14px 0 rgba(37, 99, 235, 0.39);">
                  Visit JuTech Devs
                </a>
              </div>

              <!-- Services Grid -->
              <div style="background: #f8fafc; padding: 30px; border-radius: 12px; margin: 30px 0;">
                <h3 style="color: #1f2937; margin: 0 0 20px 0; text-align: center;">Our Services</h3>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; text-align: center;">
                  <div style="padding: 15px; background: white; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                    <div style="font-size: 24px; margin-bottom: 8px;">🌐</div>
                    <div style="font-weight: 600; color: #374151;">Web Development</div>
                  </div>
                  <div style="padding: 15px; background: white; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                    <div style="font-size: 24px; margin-bottom: 8px;">📱</div>
                    <div style="font-weight: 600; color: #374151;">Mobile Apps</div>
                  </div>
                  <div style="padding: 15px; background: white; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                    <div style="font-size: 24px; margin-bottom: 8px;">🛠️</div>
                    <div style="font-weight: 600; color: #374151;">Developer Tools</div>
                  </div>
                  <div style="padding: 15px; background: white; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                    <div style="font-size: 24px; margin-bottom: 8px;">📚</div>
                    <div style="font-weight: 600; color: #374151;">Academy</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Footer -->
            <div style="background: #1f2937; padding: 30px; text-align: center;">
              <div style="margin-bottom: 20px;">
                <a href="https://github.com/jutech-devs" style="color: #9ca3af; text-decoration: none; margin: 0 10px;">GitHub</a>
                <a href="https://linkedin.com/company/jutechdevs" style="color: #9ca3af; text-decoration: none; margin: 0 10px;">LinkedIn</a>
                <a href="https://discord.gg/KbfyAkKxE" style="color: #9ca3af; text-decoration: none; margin: 0 10px;">Discord</a>
              </div>
              <p style="color: #9ca3af; margin: 0; font-size: 14px;">© ${new Date().getFullYear()} JuTech Devs. All rights reserved.</p>
              <p style="color: #6b7280; margin: 10px 0 0 0; font-size: 12px;">
                You're receiving this because you subscribed to JuTech Devs updates.<br>
                <a href="${process.env.NEXTAUTH_URL}/api/newsletter?email=${to}" style="color: #60a5fa;">Unsubscribe</a>
              </p>
            </div>
          </div>
        </body>
      </html>
    `

    return this.sendEmail({ to, subject, html })
  }
}

export { EmailService }
export const emailService = new EmailService()