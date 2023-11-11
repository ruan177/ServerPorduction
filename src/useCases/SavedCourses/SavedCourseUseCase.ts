import { prisma } from "../../lib/prisma"

export class SavedCoursesUseCase {
    async execute(userId: string) {
        const courses = await prisma.course.findMany({
           where:{
                savedUsers: {
                    some: {
                       user_id: userId
                    }
                }
           }
            
        })
        return {
            courses,
        }
    }
}
