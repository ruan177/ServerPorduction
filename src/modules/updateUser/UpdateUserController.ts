import { Request, Response} from 'express'
import { UpdateUserService } from './UpdateUserService';
import { UpdateUserRequestSchema } from './UpdateUserSchema';


export class UpdateUserController {
  async handle(req: Request, res: Response) {
    const { username, newusername, password, newpassword } = UpdateUserRequestSchema.parse(req.body);
    const { uuid } = req.params; // Extrair diretamente req.params.uuid
  
    const updateUserService = new UpdateUserService();
  
    try {
      const updatedUser = await updateUserService.execute(uuid, username, newusername, password, newpassword);
      return res.json({ user: updatedUser });
    } catch (error: any) {
      return res.status(422).json({ error: error.message });
    }
  }
}





