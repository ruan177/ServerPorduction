import { NextFunction, Request, Response} from 'express'
import { verify } from 'jsonwebtoken';


export function ensureAuthenticated(req: Request, res: Response , next: NextFunction){
    const authToken = req.headers.authorization;

    if(!authToken){
        return res.status(401).json({
            message: "Token is missing"
        })
    }
    const [,token] =   authToken.split(" ")
    try{
        verify(token, 'JzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNT')

        return next();
    }catch(error: any){
        return res.status(401).json({ error: error.message })
    }
    

}