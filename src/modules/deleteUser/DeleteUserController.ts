import { Request, Response} from 'express'
import { DeleteUserService } from './DeleteUserService'
import { z } from 'zod';


export class DeleteUserController{
    async handle(req: Request, res: Response){
        const TypeuserId = z.string();
        const user_id = TypeuserId.parse(req.params.uuid)

        const deleteUserService = new DeleteUserService();

        try{
            const response = deleteUserService.execute(user_id)

            return res.json(response)
        }catch(error: any){
            return res.status(500).json({error: error.message})
        }
        



    }
}