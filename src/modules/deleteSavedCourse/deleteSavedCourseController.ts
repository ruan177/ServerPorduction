import { Request, Response} from 'express'
import { DeleteSaveCourseSchema } from "./deleteSavedCourseSchema";
import { DeleteSavedCourseService } from "./deleteSavedCourseService";

export class DeleteSavedCourseController{
    async handle(req: Request, res: Response){
        const {userId , courseId }  = DeleteSaveCourseSchema.parse(req.body)

 
        const deleteSavedCourseService = new DeleteSavedCourseService();
        try{
            const response = deleteSavedCourseService.execute(userId, courseId)

            return res.json({response})

        }catch(error: any){
            return res.status(422).json({ error: error.message })

        }
    }
    
}