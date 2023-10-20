import { prisma } from "../../lib/prisma"

export class SaveCourseService {
    async execute(userId: string, courseId: string) {
        const savedCourseAlreadyExists = await prisma.savedCourse.findFirst({
            where: {
                user_id: userId,
                course_id:courseId
                }
            
        })

        if (savedCourseAlreadyExists) {
            throw new Error("Course Already Exists")
        }
        const savedCourse = await prisma.savedCourse.create({
            data: {
                user_id: userId,
                course_id: courseId

            }
        })
        return savedCourse;
    }
}
