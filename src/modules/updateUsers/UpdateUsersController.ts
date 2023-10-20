import { Request, Response} from 'express'
import { z } from 'zod';
import { UpdateUsersService } from './UpdateUsersService';



export class UpdateUsersController {
  async handle(req: Request, res: Response) {
    const UpdateUsersSchema = z.array(z.object({
      id: z.string(),
      username: z.string(),
      email: z.string(),
      isAdmin: z.boolean()
   }))
  
    const users = UpdateUsersSchema.parse(req.body);
   
    const updateUsersService = new UpdateUsersService();
    try{
      const response = updateUsersService.execute(users);
      
      return res.status(200).json(response);
    }catch(error: any){
      return res.status(406).json({error: error.message})
    }
  }
}



