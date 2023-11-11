import { Request, Response } from 'express'
import { CreateCourseUseCase } from './CreateCourseUseCase';
import { CourseSchema } from "./CreateCourseSchema";
export class CreateCourseController {
   async handle(req: Request, res: Response) {
      const { name, description, author_id, body } = CourseSchema.parse(req.body);

      const createCourseUseCase = new CreateCourseUseCase();

      try {
         const response = await createCourseUseCase.execute(
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