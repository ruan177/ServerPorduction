import nodemailer from 'nodemailer';
import { nanoid } from 'nanoid';
import prisma from '../../lib/client';



export class SendCodeService {
  async execute(email: string) {

    try {
      const userAlreadyExists = await prisma.user.findFirst({
        where: {
          email: email
        }
      })

      if(!userAlreadyExists){
        throw new Error('Email incorret or unsubscribed');
      }

      if ( userAlreadyExists.lastTryRecAccount && new Date().getTime() - new Date(userAlreadyExists.lastTryRecAccount).getTime() >= 24 * 60 * 60 * 1000){
        await prisma.user.update({
          where: { email: email },
          data: { attemptsLeft: 5, lastTryRecAccount: null },
        });
      }

      if (userAlreadyExists.attemptsLeft <= 0) {
        if(userAlreadyExists.lastTryRecAccount === null){
          await prisma.user.update({
          where: { email: email },
          data: { lastTryRecAccount: new Date() },
        });}
        
        throw new Error('Número máximo de tentativas excedido. Tente novamente mais tarde.');
      }
     
      // Configuração do serviço de email (exemplo usando Gmail)
      const transporter = nodemailer.createTransport({
        service: "hotmail",
        auth: {
          user: process.env.MAIL_USERNAME,
          pass: process.env.MAIL_PASSWORD, // Substitua pela sua senha do email
        },
      });

      // Gera um código aleatório usando a biblioteca uuid
      const code = nanoid(6);

      // Opções do email
      const mailOptions = {
        from: process.env.MAIL_USERNAME, // Substitua pelo seu email
        to: email,
        subject: 'Código de Verificação',
        text: `Seu código de verificação é: ${code}`,
      };

      // Envio do email
      await transporter.sendMail(mailOptions);
      
      await prisma.user.update({
        where: { email: email },
        data: { attemptsLeft: userAlreadyExists.attemptsLeft - 1,
        resetAccountCode: code},
      });

      return {code, id: userAlreadyExists.id}; // Retorna o código gerado
    } catch (error) {
      console.error('Erro ao enviar o email: ', error);
      throw new Error('Erro ao enviar o email');
    }
  }
}