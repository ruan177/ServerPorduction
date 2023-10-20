import { prisma } from "../../lib/prisma";
import { hash } from "bcrypt";

export class ResetPasswordService{
    async execute(email: string, inputCode: string, newPassword: string){
        
        const userAlreadyExists = await prisma.user.findFirst({
            where: {
                email:{
                    equals: email
                }
            }
        })


        if(!userAlreadyExists){
            throw new Error('user not find or unsubscribed');
        }
        if(userAlreadyExists.resetAccountCode !== inputCode){
            throw new Error('Something is wrong, try later');
        }
        if(newPassword === undefined){
            throw new Error('password undefined');
        }
        

        const hashedPassword = await hash(newPassword, 8);
        

        await prisma.user.update({
            where: {
                id: userAlreadyExists.id
            },
            data: {
                password: hashedPassword,
                attemptsLeft: 5,
                resetAccountCode: null
            }
        })
        return {
            message: "usuario alterado com sucesso"
        }

}
}