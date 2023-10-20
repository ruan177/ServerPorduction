import { SaveCourseSchema } from "./saveCourseSchema";
import { SaveCourseService } from "./saveCourseService";
import { Request, Response } from 'express'

export class SaveCourseController {
    async handle(req: Request, res: Response) {
        const { userId, courseId } = SaveCourseSchema.parse(req.body.data)
        console.log(req.body)

        const saveCourseService = new SaveCourseService();
        try {
            const response = saveCourseService.execute(userId, courseId)

            return res.json(response)
        } catch (error: any) {
            return res.status(422).json({ error: error.message })
        }
    }
}
    
