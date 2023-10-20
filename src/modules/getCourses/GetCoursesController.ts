import { Request, Response} from 'express'
import { GetCoursesService } from './GetCoursesService';

export class GetCoursesControler{
    async handle(req: Request, res: Response){
        const getCoursesService = new GetCoursesService();
    
        try{
            const courses = await getCoursesService.execute();
    
            return res.json({courses})
        }catch(error: any){
            return res.status(422).json({  error: error.message })
        }

    }
 }