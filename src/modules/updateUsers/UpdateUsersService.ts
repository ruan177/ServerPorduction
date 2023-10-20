import { prisma } from "../../lib/prisma";

type User = {
  id: string,
  username: string,
  email: string,
  isAdmin: boolean
}


export class UpdateUsersService {
  async execute(users: User[]) {
    if (!users) {
      throw new Error("Something is wrong");

    }
    const usersUpdated = await prisma.$transaction(
      users.map(((user) =>
        prisma.user.update({
          where: { id: user.id },
          data: { isAdmin: user.isAdmin },
        })
      ))
    )
    return usersUpdated;
  }
}
