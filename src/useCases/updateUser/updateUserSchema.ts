import {z} from 'zod'

export const UpdateUserRequestSchema = z.object({
  username: z.string().optional(),
  newUsername: z.string().optional(),
  password: z.string().optional(),
  newPassword: z.string().optional(),
});


