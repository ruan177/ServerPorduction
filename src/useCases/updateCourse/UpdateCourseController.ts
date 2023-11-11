import { Request, Response } from 'express'
import { UpdateCourseUseCase } from './UpdateCourseUseCase';
import { CourseUpdateSchema } from "./UpdateCourseSchema";
export class UpdateCourseControler {
    async handle(req: Request, res: Response) {
       const { name, description, author_id, body } = CourseUpdateSchema.parse(req.body);
       const {uuid} = req.params;
 
       const updateCourseUseCase = new UpdateCourseUseCase();
 
       try {
          const response = await updateCourseUseCase.execute(
             uuid,
             name,
             description,
             author_id,
             body
          )
          return res.json({ response })
 
       } catch (error: any) {
           return res.status(406).json({error: error.message})
       }
    }
 }