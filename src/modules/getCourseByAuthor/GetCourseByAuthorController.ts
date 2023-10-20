import { Request, Response} from 'express'
import { GetCoursesByAuthorService } from './GetCourseByAuthorService';
import { z } from 'zod';

export class GetCoursesByAuthorController {
    async handle(req: Request, res: Response) {
      const typeAuthor = z.string();
      const author = typeAuthor.parse(req.params.uuid);
  
      const getCoursesByAuthorService = new GetCoursesByAuthorService();
  
      try {
        const courses = await getCoursesByAuthorService.execute(author);
  
        return res.json({ courses });
      } catch (error: any) {
        return res.status(422).json({ error: error.message });
      }
    }
  }