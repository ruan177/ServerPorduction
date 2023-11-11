// SendCodeController.ts
import { Request, Response } from 'express';
import { SendCodeUseCase } from './SendCodeUseCase';
import { z } from 'zod';

export class SendCodeController {
  async handle(req: Request, res: Response) {
    const typeEmail = z.string();
    const  email  = typeEmail.parse(req.body.email); // Assume-se que o email é enviado pelo cliente no corpo da requisição

    const sendCodeUseCase = new SendCodeUseCase();
    try{
      const code = await sendCodeUseCase.execute( email );

      return res.json({ ...code }); 
    }catch(error: any){
      return res.status(422).json({  error: error.message })
    }
}
}