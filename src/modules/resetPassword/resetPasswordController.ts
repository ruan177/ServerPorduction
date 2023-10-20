import { Request, Response} from 'express'
import { ResetPasswordService } from './ResetPasswordService';
import { ResetPasswordSchema } from './ResetPasswordSchema';

export class ResetPasswordController{
    async handle(req: Request, res: Response){
        const { email , inputCode, newPassword } = ResetPasswordSchema.parse(req.body);
        
        const resetPasswordSerivice = new ResetPasswordService();
        try{
           
            const response = await resetPasswordSerivice.execute(email, inputCode , newPassword)

            return res.json({response})

        }catch(error: any){
            return res.status(500).json({error: error.message})
        }
    }

}