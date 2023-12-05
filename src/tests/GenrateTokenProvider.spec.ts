import {routes} from '../routes'

import request from 'supertest'


import { GenerateTokenProvider } from '../provider/GenerateTokenProvider';

describe('GenerateTokenProvider', () => {
  it('should generate a valid token', async () => {
    // Arrange
    const generateTokenProvider = new GenerateTokenProvider();
    const userId = 'c13a1794-7db2-4df1-8d42-ec5dd1c0976c';

    // Act
    const token = await generateTokenProvider.execute(userId);

    // Assert
    expect(typeof token).toBe('string');
    expect(token.length).toBeGreaterThan(0);
  });
});
