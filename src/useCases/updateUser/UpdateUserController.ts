import { Request, Response} from 'express'
import { UpdateUserUseCase } from './UpdateUserUseCase';
import { UpdateUserRequestSchema } from './UpdateUserSchema';


export class UpdateUserController {
  async handle(req: Request, res: Response) {
    const { username, newusername, password, newpassword } = UpdateUserRequestSchema.parse(req.body);
    const { uuid } = req.params; // Extrair diretamente req.params.uuid
  
    const updateUserUseCase = new UpdateUserUseCase();
  
    try {
      const updatedUser = await updateUserUseCase.execute(uuid, username, newusername, password, newpassword);
      return res.status(200).json({ user: updatedUser });
    } catch (error: any) {
      return res.status(422).json({ error: error.message });
    }
  }
}





