import { SavedCoursesSchema } from "./savedCourseSchema";
import { SavedCoursesService } from "./savedCourseService";
import { Request, Response } from 'express'

export class SavedCoursesController {
    async handle(req: Request, res: Response) {
        const { uuid } = SavedCoursesSchema.parse(req.params)
        console.log(req.body)

        const savesCoursesService = new SavedCoursesService();
        try {
            const response = await savesCoursesService.execute(uuid)

            return res.json(response)
        } catch (error: any) {
            return res.status(422).json({ error: error.message })
        }
    }
}
    
