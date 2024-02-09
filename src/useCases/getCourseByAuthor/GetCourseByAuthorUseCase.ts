import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export class GetCoursesByAuthorUseCase {
  async execute(author: string) {
    const user = await prisma.user.findFirst({
      where: {
        id: author
      }
    })
    if (!user) {
      throw new Error("User not find")
    }
    let courses

    if (user.isAdmin) {
      courses = await prisma.course.findMany({
        where: {
          author_id: {
            equals: author
          },
                  },
        include: {
          author: true
        }

      });
    } else (
      courses = await prisma.course.findMany({
        where: {
          author_id: {
            equals: author
          },
          isAproved: {
            equals: false
          }
        },
        include: {
          author: true
        }
      })
   
    )




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



