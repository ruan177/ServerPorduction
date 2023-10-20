import { Request, Response} from 'express'
import { GetCourseByIdService } from './GetCourseByIdService';
import { z } from 'zod';

export class GetCoursesByIdController{
    async handle(req: Request, res: Response){
        const typeCourse = z.string();
        const course_id = typeCourse.parse(req.params.uuid);
        const getCoursesByIdService = new GetCourseByIdService();
    
        try{
            const course = await getCoursesByIdService.execute(course_id);
    
            return res.json({course})
        }catch(error: any){
            return res.status(422).json({  error: error.message })
        }

    }
 }