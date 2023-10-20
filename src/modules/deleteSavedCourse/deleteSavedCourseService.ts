import { prisma } from "../../lib/prisma"

export class DeleteSavedCourseService {
    async execute(userId: string, courseId: string) {
        const savedCourseAlreadyExists = await prisma.savedCourse.findFirst({
            where: {
                user_id: userId,
                
                course_id: courseId
                }
            
        })

        if (!savedCourseAlreadyExists) {
            throw new Error("Course doesnt Exists")
        }
        await prisma.savedCourse.delete({
            where: {
                id: savedCourseAlreadyExists.id
            }

        })

    }
}