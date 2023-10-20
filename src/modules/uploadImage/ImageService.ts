import path from 'path';
import { UploadedFile } from 'express-fileupload';

export default class ImageService {
  async execute(images: UploadedFile | UploadedFile[]): Promise<string[]> {
    if (!Array.isArray(images)) {
      // Se houver apenas um arquivo, envolva-o em um array
      images = [images];
    }

    const imageUrls: string[] = [];

    for (const image of images) {
      const imageUrl = await this.uploadImage(image);
      imageUrls.push(imageUrl);
    }

    return imageUrls;
  }

  private uploadImage(image: UploadedFile): Promise<string> {
    return new Promise((resolve, reject) => {
      const uploadPath = path.join(__dirname, 'uploads', image.name);

      image.mv(uploadPath, (err) => {
        if (err) {
          reject(err);
        } else {
          const imageUrl = `/uploads/${image.name}`;
          resolve(imageUrl);
        }
      });
    });
  }
}




