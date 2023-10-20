import { prisma } from "../../lib/prisma";

type Course = {
    id: string,
    name: string,
    description: string,
    isAproved: boolean
}


export class UpdateCoursesService {
    async execute(courses: Course[]) {
        if (!courses) {
            throw new Error("Something is wrong");

        }
        const coursesUpdated = await prisma.$transaction(
            courses.map(((course) =>
                prisma.course.update({
                    where: { id: course.id },
                    data: { isAproved: course.isAproved },
                })
            ))
        )
        return coursesUpdated;
    }
}
