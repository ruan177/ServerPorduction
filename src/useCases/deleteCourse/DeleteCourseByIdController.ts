import {Response, Request} from "express"
import { DeleteCourseByIdUseCase } from "./DeleteCourseByIdUseCase";
import { z } from "zod";

export class DeleteCourseByIdController{
    async handle(req: Request, res: Response){
        const typeCourse = z.string();
        const course_id = typeCourse.parse(req.params.uuid);

        const deleteCouseByIdUseCase = new DeleteCourseByIdUseCase;

        try{
            const response = await deleteCouseByIdUseCase.execute(course_id)

            return res.json({ response })
        }catch(error: any){
            return res.status(422).json({  error: error.message })
        }
    }
}