import { compare, hash } from "bcrypt";
import { prisma } from "../../lib/prisma";


export class UpdateUserUseCase {
  private exclude<User, Key extends keyof User>(user: User, keys: Key[]): Omit<User, Key> {
    const updatedUser: any = { ...user };
    for (const key of keys) {
      delete updatedUser[key];
    }
    return updatedUser;
  }

  async execute(id: string, username: string | null, newUsername: string | null, password: string | null, newPassword: string | null) {
    console.log(username, newUsername, password, newPassword)
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    if (newUsername && newUsername !== username) {

      // User wants to update the username
      const updatedUser = await prisma.user.update({
        where: {
          id,
        },
        data: {
          username: newUsername,
        },
      });

      return this.exclude(updatedUser, ['password']);
    }

    else if (password && newPassword) {
      // User wants to update the password
      const passwordMatch = await compare(password, user.password);

      if (!passwordMatch) {
        throw new Error("Incorrect password");
      }
      const hashedPassword = await hash(newPassword, 8);

      const updatedUser = await prisma.user.update({
        where: {
          id,
        },
        data: {
          password: hashedPassword,
        },
      });

      return this.exclude(updatedUser, ['password']);
    } else {
      throw new Error("Invalid update request");
    }

    // If no username or password update is requested, throw an error.

  }
}
