import {prisma} from '../../lib/prisma'

export class GetUsersService{
    async execute(id: string){
        const usersAlreadyExists = await prisma.user.findMany({
           where: {
             NOT:{
                id: id
             }
           }
        })
        if(!usersAlreadyExists){
            throw new Error("User doesn't exists!");
        }
        const users = usersAlreadyExists.map(item => {
            return { 
                id: item?.id,
                username: item?.username,
                email: item?.email,
                isAdmin: item?.isAdmin,
            }
            });

         
       

        return users
    }
}