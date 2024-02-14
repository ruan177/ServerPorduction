import { Request, Response} from 'express'
import { GetUserByIdUseCase } from './GetUserByIdUseCase';
import { z } from 'zod';

export class GetUserByIdController{
    async handle(req: Request, res: Response){
        const typeUser = z.string()
        const user_id = typeUser.parse(req.params.uuid);

        const getUserByIdUseCase = new GetUserByIdUseCase();
        try{
            const user = await getUserByIdUseCase.execute(user_id)

            return res.status(200).json({user})

        }catch(error: any){
            return res.status(500).json({error: error.message})
        }
    }
}