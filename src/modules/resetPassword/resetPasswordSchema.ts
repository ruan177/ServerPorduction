import {z} from 'zod'

export const ResetPasswordSchema = z.object({
  email: z.string(),
  inputCode: z.string(),
  newPassword: z.string(),

});


