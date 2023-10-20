import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export class GetCoursesByAuthorService {
  async execute(author: string) {
      
      const courses = await prisma.course.findMany({
        where: {
          author_id: {
                equals: author

         }
        },
        include: {
            author: true
        }
        
      });
      console.log(author);
     
       if (courses.length === 0) {
         throw new Error("Courses not found");
     }

       const formattedCourses = courses.map((course) => {
         return {
          id: course.id,
           name: course.name,
           description: course.description,
           author_id: course.author_id,
        };
       });

    return formattedCourses;
    }
  }



