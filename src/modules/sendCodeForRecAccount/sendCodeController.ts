// SendCodeController.ts
import { Request, Response } from 'express';
import { SendCodeService } from './SendCodeService';
import { z } from 'zod';

export class SendCodeController {
  async handle(req: Request, res: Response) {
    const typeEmail = z.string();
    const  email  = typeEmail.parse(req.body.email); // Assume-se que o email é enviado pelo cliente no corpo da requisição

    const sendCodeService = new SendCodeService();
    try{
      const code = await sendCodeService.execute( email );

      return res.json({ ...code }); 
    }catch(error: any){
      return res.status(422).json({  error: error.message })
    }
}
}