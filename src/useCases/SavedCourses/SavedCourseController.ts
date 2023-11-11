import { SavedCoursesSchema } from "./SavedCourseSchema";
import { SavedCoursesUseCase } from "./SavedCourseUseCase";
import { Request, Response } from 'express'

export class SavedCoursesController {
    async handle(req: Request, res: Response) {
        const { uuid } = SavedCoursesSchema.parse(req.params)
        console.log(req.body)

        const savesCoursesUseCase = new SavedCoursesUseCase();
        try {
            const response = await savesCoursesUseCase.execute(uuid)

            return res.json(response)
        } catch (error: any) {
            return res.status(422).json({ error: error.message })
        }
    }
}
    
