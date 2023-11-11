import { Request, Response } from 'express'
import { CreateUserUseCase } from './CreateUserUseCase'
import { UserSchema } from './CreateUserSchema'

export class CreateUserController {
    async handle(req: Request, res: Response) {
        const { username, email, password } = UserSchema.parse(req.body);

        const createUserUseCase = new CreateUserUseCase();

        try {
            const response = await createUserUseCase.execute(
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


