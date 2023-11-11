import { SaveCourseSchema } from "./SaveCourseSchema";
import { SaveCourseUseCase } from "./SaveCourseUseCase";
import { Request, Response } from 'express'

export class SaveCourseController {
    async handle(req: Request, res: Response) {
        const { userId, courseId } = SaveCourseSchema.parse(req.body.data)
        console.log(req.body)

        const saveCourseUseCase = new SaveCourseUseCase();
        try {
            const response = await saveCourseUseCase.execute(userId, courseId)

            return res.json(response)
        } catch (error: any) {
            return res.status(422).json({ error: error.message })
        }
    }
}
    
