import { prisma } from "../../lib/prisma";

export class DeleteUsersUseCase{
    async execute(ids: string[]){
        if (!ids || ids.length === 0) { // Check if the array is empty or null
            throw new Error("No IDs provided.");
        }
        const users = prisma.user.deleteMany({
            where: {
                id: {
                    in: ids
                }
            }
        })
        return users;
    }
}