import { Request, Response } from 'express'
import { DeleteCoursesUseCase } from './DeleteCoursesUseCase'
import { z } from 'zod';

export class DeleteCoursesController{
    async handle(req: Request, res: Response){
        const idsSchema =z.array(z.string())
    
        const ids = idsSchema.parse(req.body); // Access the 'ids' property from the request body
        const deleteCoursesUseCase = new DeleteCoursesUseCase;
        try{
            const response = await deleteCoursesUseCase.execute(ids)

           return res.json({ response })
        }catch(error: any){
            return res.status(422).json({  error: error.message })
        }
    }
}