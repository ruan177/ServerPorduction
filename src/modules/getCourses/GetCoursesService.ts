import { prisma } from "../../lib/prisma";


export class GetCoursesService{
    async execute(){
        const getCourses = await prisma.course.findMany({
            where:{
                isAproved: true
            }, 
            include:{
                savedUsers:true
            },
            
        }
    );

        const courses = getCourses.map(item => {
            return { 
                id: item?.id,
                name: item?.name,
                description: item?.description,
                author_id: item?.author_id,
                savedUsers: item?.savedUsers
            }
            });
        return courses;
    }
 }