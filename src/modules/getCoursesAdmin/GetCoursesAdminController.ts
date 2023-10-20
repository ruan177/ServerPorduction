import { Request, Response} from 'express'
import { GetCoursesAdminService } from './GetCoursesAdminService';

export class GetCoursesAdminController{
    async handle(req: Request, res: Response){
        const getCoursesAdminService = new GetCoursesAdminService();
    
        try{
            const courses = await getCoursesAdminService.execute();
    
            return res.json({courses})
        }catch(error: any){
            return res.status(422).json({  error: error.message })
        }

    }
 }
