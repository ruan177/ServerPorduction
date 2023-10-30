import { Request, Response } from 'express';
import ImageService from './ImageService';

export class ImageController {
  async handle(req: Request, res: Response) {
    try {
      const {file} = req;
      const imageService = new ImageService();
      const imageUrl = await imageService.execute(file.filename);

      res.status(201).json({ imageUrl });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Falha ao fazer upload da imagem' });
    }
  }
}
