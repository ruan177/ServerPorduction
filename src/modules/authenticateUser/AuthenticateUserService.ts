import { prisma } from '../../lib/prisma'
import { compare } from 'bcrypt'
import { GenerateRefreshToken } from '../../provider/GenerateRefreshToken'
import { GenerateTokenProvider } from '../../provider/GenerateTokenProvider'



export class AuthenticateUserService {
    async execute(email: string, password: string) {
        const userAlreadyExists = await prisma.user.findFirst({
            where: {
                email
            },
            include: {
                token: true
            }
        })

        if (!userAlreadyExists) {
            throw new Error("unregistered user or incorrect email");
        }

        const passwordMatch = await compare(password, userAlreadyExists.password)

        if (!passwordMatch) {
            console.log(userAlreadyExists.password)
            throw new Error("unregistered user or incorrect email")
        }
        const generateTokenProvider = new GenerateTokenProvider();
        const generateRefreshToken = new GenerateRefreshToken();

        const accessToken = await generateTokenProvider.execute(userAlreadyExists.id);

        if (userAlreadyExists.token) {
            await prisma.refreshToken.delete({
                where: {
                    user_id: userAlreadyExists.id
                }
            })
        }


        const refreshToken = await generateRefreshToken.execute(userAlreadyExists.id);

        function userProps(usuario: {
            profileImageUrl: string; username: string; id: string; email: string; isAdmin: boolean
        }) {
            const propriedadesDesejadas = {
                id: usuario.id,
                username: usuario.username,
                email: usuario.email,
                isAdmin: usuario.isAdmin,
                profileImageUrl: usuario.profileImageUrl,
            };

            return propriedadesDesejadas;
        }
        const user = userProps(userAlreadyExists);

        return {
            user,
            accessToken,
            refreshToken
        };

    }


}