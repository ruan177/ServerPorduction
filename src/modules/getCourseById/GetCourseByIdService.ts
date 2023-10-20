import { prisma } from "../../lib/prisma";


export class GetCourseByIdService{
    async execute(course_id: string){
        const course = await prisma.course.findFirst({
            where: {
                id: course_id
            }
        })
        if(!course){
            throw new Error("Course not find")
        }
        return course;
    }
 }