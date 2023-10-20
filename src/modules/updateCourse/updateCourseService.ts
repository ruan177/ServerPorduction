import { prisma } from "../../lib/prisma";



export class UpdateCourseService {
    async execute(uuid:string, name:string, description:string, author_id:string, body:string  ){
        const courseAlreadyExists = await prisma.course.findFirst({   
            where: {
                id: uuid
            }
        })

        if (!courseAlreadyExists) {
            throw new Error("Course not find")
        }
        if(courseAlreadyExists.author_id != author_id){
            throw new Error("Someting is wrong")
        }

        const course = await prisma.course.update({
            where: {
                id: courseAlreadyExists.id
            },
            data: {
                name,
                description,
                body
            }
        })

        return course


    }
}