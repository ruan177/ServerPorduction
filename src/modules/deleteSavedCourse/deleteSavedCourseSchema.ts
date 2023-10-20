import {z} from 'zod'

export const DeleteSaveCourseSchema = z.object( {
    userId: z.string(),
    courseId: z.string()
})

