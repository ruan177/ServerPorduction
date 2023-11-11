import { Request, Response } from 'express'
import { z } from 'zod';
import { UpdateCoursesUseCase } from './UpdateCoursesUseCase';

export class UpdateCoursesController {
  async handle(req: Request, res: Response) {
    const UpdateCoursesSchema = z.array(z.object({
      id: z.string(),
      name: z.string(),
      description: z.string(),
      isAproved: z.boolean()
    }))

    const courses = UpdateCoursesSchema.parse(req.body);

    const updateCoursesUseCase = new UpdateCoursesUseCase();
    try {
      const response = updateCoursesUseCase.execute(courses);

      return res.status(200).json(response);
    } catch (error: any) {
      return res.status(406).json({ error: error.message })
    }
  }
}

