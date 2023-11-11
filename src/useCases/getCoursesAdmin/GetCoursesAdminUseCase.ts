import { prisma } from "../../lib/prisma";


export class GetCoursesAdminUseCase{
    async execute(){
        const getCourses = await prisma.course.findMany({
        }
    );

        const courses = getCourses.map(item => {
            return { 
                id: item?.id,
                name: item?.name,
                description: item?.description,
                isAproved: item?.isAproved
            }
            });
        return courses;
    }
 }