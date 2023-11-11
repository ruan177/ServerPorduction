import { resolve } from 'path';

export default class GetImageUseCase {
  async execute(filename: string): Promise<string> {
    const imagePath = resolve('uploads', filename);
    return imagePath;
  }
}
