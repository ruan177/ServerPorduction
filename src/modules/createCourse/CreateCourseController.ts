import { Request, Response } from 'express'
import { CreateCourseService } from './CreateCourseService';
import { CourseSchema } from "./CreateCourseSchema";
export class CreateCourseController {
   async handle(req: Request, res: Response) {
      const { name, description, author_id, body } = CourseSchema.parse(req.body);

      const createCourseService = new CreateCourseService();

      try {
         const response = createCourseService.execute(
            name,
            description,
            author_id,
            body
         )
         return res.json({ response })

      } catch (error: any) {
         return res.status(422).json({ error: error.message })
      }
   }
}