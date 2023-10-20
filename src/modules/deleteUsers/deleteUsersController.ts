import { Request, Response } from 'express'
import { DeleteUsersService } from './DeleteUsersService'
import { z } from 'zod';


export class DeleteUsersController{
    async handle(req: Request, res: Response){
        const idsSchema = z.array(z.string())
        
        const ids = idsSchema.parse(req.body); // Access the
        const deleteUsersService = new DeleteUsersService;
        try{
            const response = deleteUsersService.execute(ids)

            return res.json({ response })
        }catch(error: any){
            return res.status(422).json({  error: error.message })
        }
    }
}