import { Request, Response} from 'express'
import { GetUsersUseCase } from './GetUsersUseCase';

export class GetUsersController{
    async handle(req: Request, res: Response){
        const { uuid } = req.params;
      
        const getUsersUseCase = new GetUsersUseCase();
        try{
            const users = await getUsersUseCase.execute(uuid)

            return res.json(users)

        }catch(error: any){
            return res.status(500).json({error: error.message})
        }
    }
}