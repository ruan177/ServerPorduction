import { Request, Response} from 'express'
import { z } from 'zod';
import { UpdateUsersUseCase } from './UpdateUsersUseCase';



export class UpdateUsersController {
  async handle(req: Request, res: Response) {
    const UpdateUsersSchema = z.array(z.object({
      id: z.string(),
      username: z.string(),
      email: z.string(),
      isAdmin: z.boolean()
   }))
  
    const users = UpdateUsersSchema.parse(req.body);
   
    const updateUsersUseCase = new UpdateUsersUseCase();
    try{
      const response = updateUsersUseCase.execute(users);
      
      return res.status(200).json(response);
    }catch(error: any){
      return res.status(406).json({error: error.message})
    }
  }
}



