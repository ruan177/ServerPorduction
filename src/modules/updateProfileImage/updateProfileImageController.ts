import { Request, Response } from 'express';
import UpdateProfileImageService from './updateProfileImageService';
import { z } from 'zod';

export class UpdateProfileImageController {
    async handle(req: Request, res: Response) {
        try {
            const typeUserId = z.string();
            const userId = typeUserId.parse(req.params.uuid)
            const { file } = req;
            const updateProfileImageService = new UpdateProfileImageService();
            const response = await updateProfileImageService.execute(file.filename, userId);

            res.status(201).json({ response });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Falha ao fazer upload da imagem' });
        }
    }
}
