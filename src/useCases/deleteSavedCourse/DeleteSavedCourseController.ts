import { Request, Response} from 'express'
import { DeleteSaveCourseSchema } from "./DeleteSavedCourseSchema";
import { DeleteSavedCourseUseCase } from "./DeleteSavedCourseUseCase";

export class DeleteSavedCourseController{
    async handle(req: Request, res: Response){
        const {userId , courseId }  = DeleteSaveCourseSchema.parse(req.body)

 
        const deleteSavedCourseUseCase = new DeleteSavedCourseUseCase();
        try{
            const response = await deleteSavedCourseUseCase.execute(userId, courseId)

            return res.json({response})

        }catch(error: any){
            return res.status(422).json({ error: error.message })

        }
    }
    
}