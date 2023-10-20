import { prisma } from "../../lib/prisma";


export class CreateCourseService {
    async execute( name: string, description: string, author_id: string, body: string ) {
        const courseAlreadyExists = await prisma.course.findFirst({
            where: {
                name
            }
        })

        if (courseAlreadyExists) {
            throw new Error("Course Already Exists")
        }

        const course = await prisma.course.create({
            data: {
                name,
                description,
                author_id,
                body
            }
        })

        return course


    }
}