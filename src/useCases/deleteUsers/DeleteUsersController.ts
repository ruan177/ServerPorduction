import { Request, Response } from 'express'
import { DeleteUsersUseCase } from './DeleteUsersUseCase'
import { z } from 'zod';


export class DeleteUsersController{
    async handle(req: Request, res: Response){
        const idsSchema = z.array(z.string())
        
        const ids = idsSchema.parse(req.body); // Access the
        const deleteUsersUseCase = new DeleteUsersUseCase;
        try{
            const response = await deleteUsersUseCase.execute(ids)

            return res.json({ response })
        }catch(error: any){
            return res.status(422).json({  error: error.message })
        }
    }
}