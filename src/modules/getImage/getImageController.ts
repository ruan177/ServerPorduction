import { Request, Response} from 'express'
import GetImageService from './getImageService';


 export class GetImageController{
    async handle(req: Request, res: Response){

    try {
      const { filename } = req.params;
      const getImageService = new GetImageService();
      const imagePath = await getImageService.execute(filename);
      
      res.sendFile(imagePath);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Falha ao servir a imagem' });
    }
  }
}

