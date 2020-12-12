import { Request, Response } from 'express'
import EmailService from '../services/EmailService'

const users = [
  { name: 'Rubens', email: 'kaetaen@tutanota.com' }
]

export default {
  async index(_req: Request, res: Response) {
    return res.json(users)
  },

  async create (_req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendEmail({
      to: {
        name: 'Rubens dos Santos',
        email: 'kaetaen@tutanota.com'
      },
      message: {
        subject: 'Bem vindo ao sistema',
        body: 'Seja bem-vindo'
      }
    });
    
    return res.send('Criado com sucesso!')
  }
}

