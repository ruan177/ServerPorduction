import { prisma } from "../../lib/prisma";

export class DeleteCoursesUseCase{
    async execute(ids: string[]){
        if (!ids || ids.length === 0) { // Check if the array is empty or null
            throw new Error("No IDs provided.");
        }
        const courses = prisma.course.deleteMany({
            where: {
                id: {
                    in: ids
                }
            }
        })
        return courses;
    }
}