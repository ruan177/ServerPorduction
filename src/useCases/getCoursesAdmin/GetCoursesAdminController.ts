import { Request, Response} from 'express'
import { GetCoursesAdminUseCase } from './GetCoursesAdminUseCase';

export class GetCoursesAdminController{
    async handle(req: Request, res: Response){
       
        const getCoursesAdminUseCase = new GetCoursesAdminUseCase();

        try{
            
            const courses = await getCoursesAdminUseCase.execute();

            return res.json({courses})
        }catch(error: any){
            return res.status(422).json({  error: error.message })
        }
    }
}
