import { Request, Response} from 'express'
import { RefreshTokenUserUseCase } from './RefreshTokeUserUseCase';
import { z } from 'zod';


export class RefreshTokenUserController{
    async handle(req: Request, res: Response){
        const typeRefresh = z.string();
  
        const refresh = typeRefresh.parse(req.body.refreshToken.id);



        const refreshTokenUserUseCase = new RefreshTokenUserUseCase()

        try{
            const response = await refreshTokenUserUseCase.execute(refresh)
          
              
            return res.json({...response}) 
        }catch(error: any){
            return res.status(401).json(error.message)
        }

        

    }
}