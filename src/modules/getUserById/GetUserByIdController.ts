import { Request, Response} from 'express'
import { GetUserByIdService } from './GetUserByIdService';
import { z } from 'zod';

export class GetUserByIdController{
    async handle(req: Request, res: Response){
        const typeUser = z.string()
        const user_id = typeUser.parse(req.params.uuid);

        const getUserByIdService = new GetUserByIdService();
        try{
            const user = await getUserByIdService.execute(user_id)

            return res.json(user)

        }catch(error: any){
            return res.status(500).json({error: error.message})
        }
    }
}