import {prisma} from '../../lib/prisma'

export class GetUserByIdService{
    private exclude<User, Key extends keyof User>(user: User, keys: Key[]): Omit<User, Key> {
        const updatedUser: any = { ...user };
        for (const key of keys) {
          delete updatedUser[key];
        }
        return updatedUser;
    }
    async execute(user_id: string){
        const userAlreadyExists = await prisma.user.findFirst({
            where:{
                id: user_id
            },
            
        })
        if(!userAlreadyExists){
            throw new Error("User doesn't exists!");
        }

          
        const userWithoutPassword = this.exclude(userAlreadyExists, ['password'])

        return userWithoutPassword
    }
}