import { Request, Response} from 'express'
import { GetCourseByIdUseCase } from './GetCourseByIdUseCase';
import { z } from 'zod';

export class GetCoursesByIdController{
    async handle(req: Request, res: Response){
        const typeCourse = z.string();
        const course_id = typeCourse.parse(req.params.uuid);
        const getCoursesByIdUseCase = new GetCourseByIdUseCase();
    
        try{
            const course = await getCoursesByIdUseCase.execute(course_id);
    
            return res.json({course})
        }catch(error: any){
            return res.status(422).json({  error: error.message })
        }

    }
 }