import { Request, Response} from 'express'
import { DeleteUserUseCase } from './DeleteUserUseCase'
import { z } from 'zod';


export class DeleteUserController{
    async handle(req: Request, res: Response){
        const TypeuserId = z.string();
        const user_id = TypeuserId.parse(req.params.uuid)

        const deleteUserUseCase = new DeleteUserUseCase();

        try{
            const response = await deleteUserUseCase.execute(user_id)

            return res.json(response)
        }catch(error: any){
            return res.status(500).json({error: error.message})
        }
        



    }
}