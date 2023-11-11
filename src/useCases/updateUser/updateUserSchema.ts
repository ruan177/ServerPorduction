import {z} from 'zod'

export const UpdateUserRequestSchema = z.object({
  username: z.string().optional(),
  newusername: z.string().optional(),
  password: z.string().optional(),
  newpassword: z.string().optional(),
});


