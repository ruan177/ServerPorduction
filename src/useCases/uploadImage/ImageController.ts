import { Request, Response } from 'express';
import ImageUseCase from './ImageUseCase';

export class ImageController {
  async handle(req: Request, res: Response) {
    try {
      const {file} = req;
      const imageUseCase = new ImageUseCase();
      if (!file || !file.filename) {
        throw new Error('File or filename is missing');
      }
      const imageUrl = await imageUseCase.execute(file.filename);
      res.status(200).json({ imageUrl });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Falha ao fazer upload da imagem' });
    }
  }
}
