import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "1d2e1cf430ebd7",
      pass: "6abfbcda606dde"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData){
        await transport.sendMail({
            from: 'Equipe Feedget <contato@feedget.com>',
            to: 'João Gabriel <joaogkvalho@gmail.com>',
            subject,
            html: body,
        })
    }
}