import { z } from 'zod'

export const CourseUpdateSchema = z.object({
    name: z.string(),
    description: z.string(),
    author_id: z.string(),
    body: z.string()
})
