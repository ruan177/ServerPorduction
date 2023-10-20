import { Request, Response} from 'express'
import { GetUsersService } from './GetUsersService';

export class GetUsersController{
    async handle(req: Request, res: Response){
        const { uuid } = req.params;
      
        const getUsersService = new GetUsersService();
        try{
            const users = await getUsersService.execute(uuid)

            return res.json(users)

        }catch(error: any){
            return res.status(500).json({error: error.message})
        }
    }
}