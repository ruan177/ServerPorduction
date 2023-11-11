import { sign } from "jsonwebtoken";

export class GenerateTokenProvider{

    async execute(user_id: string){
        
        const token = sign({
        
            }, 'JzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNT', {
             expiresIn: '6m',
             subject: String(user_id)
        });

        return token;
        
        
    }
       

}