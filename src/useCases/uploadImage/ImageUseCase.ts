
export default class ImageUseCase {
  async execute(filename: string): Promise<string> {
    // Constrói a URL da imagem com base no nome do arquivo.
    const imageUrl = `http://${process.env.SERVER_ADRESS}/images/${filename}`;
    return imageUrl;
  }
  
}




