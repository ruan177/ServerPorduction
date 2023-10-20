import {Response, Request} from "express"
import { DeleteCourseByIdService } from "./DeleteCourseByIdService";
import { z } from "zod";

export class DeleteCourseByIdController{
    async handle(req: Request, res: Response){
        const typeCourse = z.string();
        const course_id = typeCourse.parse(req.params.uuid);

        const deleteCouseByIdService = new DeleteCourseByIdService;

        try{
            const response = deleteCouseByIdService.execute(course_id)

            return res.json({ response })
        }catch(error: any){
            return res.status(422).json({  error: error.message })
        }
    }
}