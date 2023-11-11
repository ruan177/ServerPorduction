import { z } from 'zod'

export const CourseSchema = z.object({
    name: z.string(),
    description: z.string(),
    author_id: z.string(),
    body: z.string()
})

