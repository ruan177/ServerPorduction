import { Request, Response } from 'express'
import { CreateUserService } from './CreateUserService'
import { UserSchema } from './CreateUserSchema'

export class CreateUserController {
    async handle(req: Request, res: Response) {
        const { username, email, password } = UserSchema.parse(req.body);

        const createUserService = new CreateUserService();

        try {
            const response = await createUserService.execute(
                username,
                email,
                password
            );

            return res.json({ response })
        } catch (error: any) {
            return res.status(422).json({ error: error.message })
        }



    }

}


