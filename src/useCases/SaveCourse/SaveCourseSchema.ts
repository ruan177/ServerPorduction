import { z } from 'zod'

export const SaveCourseSchema = z.object({
    userId: z.string(),
    courseId: z.string()
})

