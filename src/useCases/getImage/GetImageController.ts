import { Request, Response} from 'express'
import GetImageUseCase from './GetImageUseCase';


 export class GetImageController{
    async handle(req: Request, res: Response){

    try {
      const { filename } = req.params;
      const getImageUseCase = new GetImageUseCase();
      const imagePath = await getImageUseCase.execute(filename);
      
      res.sendFile(imagePath);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Falha ao servir a imagem' });
    }
  }
}

