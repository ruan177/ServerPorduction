

import { PrismaClient } from '@prisma/client';
import { GenerateRefreshToken } from '../provider/GenerateRefreshToken';
import { hash } from 'bcrypt';

describe('GenerateRefreshToken', () => {
  it('should generate a valid refresh token', async () => {
    // Arrange
    const prisma = new PrismaClient();
    const generateRefreshToken = new GenerateRefreshToken();

    // Create a user
    const user = await prisma.user.create({
      data: {
        id: "02c10a60-929f-11ee-b9d1-0242ac120002",
        username: "nome de usuario qualquer ",
        email: "email de exemplo",
        password: await hash('senha qualquer', 8),
        isAdmin: true
    }, 
    });

    const userId = user.id;

    // Act
    const refreshTokenData = await generateRefreshToken.execute(userId);

    // Assert
    expect(refreshTokenData).toBeDefined();
    expect(typeof refreshTokenData).toBe('object');
    expect(refreshTokenData.user_id).toBe(userId);
    expect(refreshTokenData.expiresIn).toBeDefined();
    expect(typeof refreshTokenData.expiresIn).toBe('string');
    expect(refreshTokenData.expiresIn.length).toBeGreaterThan(0);

    // Clean up
    await prisma.user.delete({ where: { id: userId } });
  });
});