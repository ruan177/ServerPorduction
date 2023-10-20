import { Request, Response } from 'express';
import ImageService from './ImageService';
import { UploadedFile } from 'express-fileupload';


export class ImageController {
  async handle(req: Request, res: Response) {
    try {
      if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({ message: 'Nenhum arquivo foi enviado.' });
      }

      const images: UploadedFile | UploadedFile[] = req.files.image;
      const imageService = new ImageService() // 'image' é o nome do campo de upload no formulário

      const imageUrls: string[] = await imageService.execute(images);

      res.json({ message: 'Arquivo(s) enviado(s) com sucesso.', imageUrls });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao fazer o upload do arquivo.' });
    }
  }
}