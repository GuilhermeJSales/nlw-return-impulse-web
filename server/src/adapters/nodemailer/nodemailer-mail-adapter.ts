import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "2fb119420b74ee",
    pass: "f99b4ab20c9e62"
  }
});



export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body}: SendMailData) {
      await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Guilherme Jesus Sales <guijsalesdg@outlook.com>',
    subject,
    html: body,
    })

  };
}