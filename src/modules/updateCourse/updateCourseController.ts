import { Request, Response } from 'express'
import { UpdateCourseService } from './UpdateCourseService';
import { CourseUpdateSchema } from "./UpdateCourseSchema";
export class UpdateCourseControler {
    async handle(req: Request, res: Response) {
       const { name, description, author_id, body } = CourseUpdateSchema.parse(req.body);
       const {uuid} = req.params;
 
       const updateCourseService = new UpdateCourseService();
 
       try {
          const response = await updateCourseService.execute(
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