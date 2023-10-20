import { Request, Response } from 'express'
import { AuthenticateUserService } from './AuthenticateUserService'
import { AuthenticateSchema } from './AuthenticateUserSchema'


export class AuthenticateUserController {
    async handle(req: Request, res: Response) {
        const { email, password } = AuthenticateSchema.parse(req.body);

        const authenticateUserService = new AuthenticateUserService();

        try {
            const token = await authenticateUserService.execute(
                email,
                password
            );

            return res.json({ ...token })
        } catch (error: any) {
            console.log(error.message)
            return res.status(422).json({ error: error.message })
        }



    }

}

