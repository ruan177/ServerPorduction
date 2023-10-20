import { compare, hash } from "bcrypt";
import { prisma } from "../../lib/prisma";


export class UpdateUserService {
    private exclude<User, Key extends keyof User>(user: User, keys: Key[]): Omit<User, Key> {
        const updatedUser: any = { ...user };
        for (const key of keys) {
          delete updatedUser[key];
        }
        return updatedUser;
      }

    async execute( id:string, username: string | null , newusername:string | null , password:string | null,  newpassword: string | null ){
      const user = await prisma.user.findUnique({
        where: {
          id,
        },
      });
  
      if (!user) {
        throw new Error("User not found");
      }
  
      if (newusername && newusername !== username) {
        
        // User wants to update the username
        const updatedUser = await prisma.user.update({
          where: {
            id,
          },
          data: {
            username: newusername,
          },
        });
  
        return this.exclude(updatedUser, ['password']);
      }
  
      if (password && newpassword) {
        // User wants to update the password
        const passwordMatch = await compare(password, user.password);
  
        if (!passwordMatch) {
          throw new Error("Incorrect password");
        }
        const hashedPassword = await hash(newpassword, 8);
  
        const updatedUser = await prisma.user.update({
          where: {
            id,
          },
          data: {
            password: hashedPassword,
          },
        });
  
        return this.exclude(updatedUser, ['password']);
      }
  
      // If no username or password update is requested, throw an error.
      throw new Error("Invalid update request");
    }
  }
  