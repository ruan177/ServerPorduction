import { Request, Response } from 'express';
import UpdateProfileImageUseCase from './UpdateProfileImageUseCase';
import { z } from 'zod';

export class UpdateProfileImageController {
    async handle(req: Request, res: Response) {
        try {
            const typeUserId = z.string();
            const userId = typeUserId.parse(req.params.uuid)
            const { file } = req;
            const updateProfileImageUseCase = new UpdateProfileImageUseCase();
            const response = await updateProfileImageUseCase.execute(file.filename, userId);

            res.status(200).json({ response });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Falha ao fazer upload da imagem' });
        }
    }
}
