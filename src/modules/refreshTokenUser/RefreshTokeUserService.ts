import {prisma} from '../../lib/prisma'
import dayjs from 'dayjs';
import { GenerateTokenProvider } from "../../provider/GenerateTokenProvider";

export class RefreshTokenUserService {
    async execute(refresh_Token: string){
        const refreshToken = await prisma.refreshToken.findFirst({
            where: {
                id: refresh_Token,
            } 
        })
        if(!refreshToken){
            throw new Error("Refresh Token Invalid ")
        }

        const refreshTokenExpired = dayjs().isAfter(dayjs.unix(Number(refreshToken.expiresIn)))

        if(refreshTokenExpired){
            throw new Error("Refresh Token Expired")
        }

        const generateTokenProvider = new GenerateTokenProvider();
        const token = await generateTokenProvider.execute(refreshToken.user_id);
        


        return token
        
    }
}