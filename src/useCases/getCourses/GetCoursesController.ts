import { Request, Response} from 'express'
import { GetCoursesUseCase } from './GetCoursesUseCase';

export class GetCoursesControler{
    async handle(req: Request, res: Response){
        const getCoursesUseCase = new GetCoursesUseCase();
    
        try{
            const courses = await getCoursesUseCase.execute();
    
            return res.json({courses})
        }catch(error: any){
            return res.status(422).json({  error: error.message })
        }

    }
 }