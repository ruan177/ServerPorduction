import {prisma} from '../../lib/prisma'


export class DeleteUserService{
    async execute(user_id: string ){

        const userAlreadyExists = await prisma.user?.findFirst({
            where:{
                id: user_id
            }
        })

        if(!userAlreadyExists){
            throw new Error("user not find");
        }
        
        const user = await prisma.user.delete({
            where: {
                id: userAlreadyExists.id
            }
        })

        return user;
        
    }
}