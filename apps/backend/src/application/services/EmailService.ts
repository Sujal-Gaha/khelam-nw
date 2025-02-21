import nodemailer from "nodemailer";

export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  async sendWelcomeEmail(email: string): Promise<void> {
    await this.transporter.sendMail({
      to: email,
      subject: "Welcome to Our Platform!",
      text: "Thank you for registering. We’re excited to have you on board!",
    });
  }
}
