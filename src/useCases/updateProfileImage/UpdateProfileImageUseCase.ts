import { prisma } from "../../lib/prisma";

export default class UpdateProfileImageUseCase {
    async execute(filename: string, userId: string)  {
      // Constrói a URL da imagem com base no nome do arquivo.
      const imageUrl = `${process.env.SERVER_ADRESS}/images/${filename}`;

     
      
      const user = await prisma.user.findFirst({
        where:{
            id:{
              equals: userId
            } 
        }
      })
   
      if(!user){
        throw new Error('User dont exists')
      }
      
      await prisma.user.update({
        where:{
            id: user.id
        },
        data:{
            profileImageUrl: imageUrl
        }

      })

    }
    
  }
  

  
  
  
