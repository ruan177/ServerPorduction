import {prisma} from '../../lib/prisma'
import {hash}from 'bcrypt'


export class CreateUserUseCase{
    async execute(username: string, email: string, password: string) {
        const userAlreadyExists = await prisma.user.findFirst({
            where: {
                email,
            },
        });

        if(userAlreadyExists){
            throw new Error("Email ja cadastrado ou inválido!");
        }
        const hashedPassword = await hash(password, 8);

        const user = await prisma.user.create({
            data:{
                username, 
                email, 
                password: hashedPassword
            },
        });

        return user;
    }}
