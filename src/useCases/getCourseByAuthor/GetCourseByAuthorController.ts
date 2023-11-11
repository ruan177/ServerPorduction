import { Request, Response} from 'express'
import { GetCoursesByAuthorUseCase } from './GetCourseByAuthorUseCase';
import { z } from 'zod';

export class GetCoursesByAuthorController {
    async handle(req: Request, res: Response) {
      const typeAuthor = z.string();
      const author = typeAuthor.parse(req.params.uuid);
  
      const getCoursesByAuthorUseCase = new GetCoursesByAuthorUseCase();
  
      try {
        const courses = await getCoursesByAuthorUseCase.execute(author);
  
        return res.json({ courses });
      } catch (error: any) {
        return res.status(422).json({ error: error.message });
      }
    }
  }