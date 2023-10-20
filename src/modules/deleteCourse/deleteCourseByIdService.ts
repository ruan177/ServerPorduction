import { prisma } from "../../lib/prisma";


export class DeleteCourseByIdService{
    async execute(course_id: string){
        const courseAlreadyExists = await prisma.course.findFirst({
            where: {
                id: course_id
            }
        })
        if(!courseAlreadyExists){
            throw new Error('Course not found')
        }
        const course = await prisma.course.delete({
            where: {
                id: courseAlreadyExists.id
            }
        })
        return course;

    }
}