import { PrismaClient } from '@prisma/client'
import { hash } from 'bcrypt'

const prisma = new PrismaClient()
async function main() {
    await prisma.user.deleteMany()
    await prisma.course.deleteMany()
    await Promise.all([
      await prisma.user.create({
        data: {
          id: "c13a1794-7db2-4df1-8d42-ec5dd1c0976c",
          username: "ruan177",
          email: "ruanpatrick177@gmail.com",
          password: await hash('12345', 8),
          isAdmin: true
      }, 
      include: {
        created_courses: true,
      }
    }),
    await prisma.user.create({
      data: {
        id: "another-user-id",
        username: "anotheruser",
        email: "anotheruser@example.com",
        password: await hash('mypassword', 8),
        isAdmin: false
      },
      include: {
        created_courses: true,
      }
    }),
    await prisma.user.create({
      data: {
        id: "user3-id",
        username: "user3",
        email: "user3@example.com",
        password: await hash('user3password', 8),
        isAdmin: false
      },
      include: {
        created_courses: true,
      }
    }),
    ]),
    await Promise.all([
      await prisma.course.create({
        data: { 
          name: "Lógica de Programação  ",
          description : "Desenvolver conceitos básicos, como variaveis, loops, tipos de dados, vetores",
          author_id: "c13a1794-7db2-4df1-8d42-ec5dd1c0976c",
          isAproved: true,
          body: `" 
          # O que é lógica de programação?

          Lógica de programação é a habilidade de criar algoritmos que resolvem problemas 
          computacionais. Em outras palavras, é o processo de pensar em uma sequência lógica de 
          instruções que um computador deve seguir para executar uma tarefa.
          
          A lógica de programação é fundamental para o desenvolvimento de software, pois permite
          que os programadores expressem soluções para problemas de maneira clara e sistemática.
          Ela ajuda a garantir que o código seja fácil de entender, modificar e manter, além de ser
          eficiente e confiável.
          
          Alguns conceitos importantes da lógica de programação incluem:
          
          - **Variáveis:** valores que podem ser armazenados e manipulados pelo programa.
          - "**Estruturas de controle:**" instruções que controlam o fluxo de execução do programa,
            como loops (laços) e condicionais.
          - **Funções e procedimentos:** blocos de código que realizam tarefas específicas e podem
            ser chamados em diferentes partes do programa.
          - **Algoritmos:** sequências de instruções lógicas que resolvem um problema específico.
          
          Dominar a lógica de programação pode levar tempo e prática, mas é um investimento
          essencial para quem deseja se tornar um programador competente. Com uma sólida
          compreensão da lógica de programação, você pode escrever código mais eficiente, fácil de
          manter e que atenda aos requisitos do problema que está sendo resolvido."` ,
        }, 
        include: {
          author: true,
        }
      }),
       await prisma.course.create({
        data:{
          name: "Orientação a objeto",
          description : "Desenovolver os conceitos de classes, herança, polimorfismo, escopo",
          author_id: "c13a1794-7db2-4df1-8d42-ec5dd1c0976c",
          isAproved: true,
          body: `
          # O que é Orientação a Objeto?

          Orientação a Objeto (OO) é um paradigma de programação que utiliza objetos para
          representar entidades e conceitos do mundo real em um programa de computador. Em
          outras palavras, é um modelo de programação que se baseia em abstração,
          encapsulamento, herança e polimorfismo.
          
          A OO permite que os programadores criem soluções mais complexas e flexíveis, dividindo o
          programa em pequenas partes independentes que trabalham juntas para cumprir um
          objetivo comum. Ao utilizar objetos, o código se torna mais modular e fácil de entender,
          permitindo uma maior reutilização de código e uma menor propensão a erros.
          
          Alguns conceitos importantes da Orientação a Objeto incluem:
          
          - **Classes:** modelos que definem as propriedades e comportamentos dos objetos.
          - **Objetos:** instâncias de classes que representam entidades ou conceitos do mundo real.
          - **Encapsulamento:** técnica que limita o acesso aos dados de uma classe, protegendo-os
            de modificações externas indesejadas.
          - **Herança:** técnica que permite que uma classe derive propriedades e comportamentos
            de outra classe.
          - **Polimorfismo:** capacidade de objetos de uma mesma classe responderem de maneiras
            diferentes a uma mesma mensagem.
          
          Dominar a Orientação a Objeto pode levar tempo e prática, mas é um investimento
          fundamental para quem deseja se tornar um programador de software de alta qualidade.
          Com uma sólida compreensão de OO, você pode criar soluções mais robustas, escaláveis e
           fáceis de manter, que atendam às necessidades de seus usuários e evoluam ao longo do
            tempo.`,
        },

        include: {
          author: true,
        }
      }),
      await prisma.course.create({
        data: {
          name: "Desenvolvimento Web com React",
          description: "Aprenda a criar aplicações web modernas utilizando a biblioteca React.",
          author_id: "c13a1794-7db2-4df1-8d42-ec5dd1c0976c",
          isAproved: true,
          body: `
            # Desenvolvimento Web com React
    
            React é uma biblioteca JavaScript amplamente utilizada para construir interfaces de usuário
            interativas e reativas. Neste curso, você explorará os conceitos fundamentais do React e
            aprenderá a criar componentes reutilizáveis e dinâmicos.
    
            Tópicos deste curso:
    
            - **Componentização:** criação e composição de componentes.
            - **Estado e Propriedades:** gerenciamento de dados e comunicação entre componentes.
            - **Roteamento:** navegação entre páginas em aplicações de página única.
            - **Gerenciamento de Estado:** utilização de contextos e hooks de estado.
            
            Compreender React é essencial para a construção de aplicações web modernas e
            interativas. Ao concluir este curso, você estará pronto para desenvolver suas próprias
            aplicações front-end de alta qualidade.
          `,
        },
        include: {
          author: true,
        },
      }),
    
      await prisma.course.create({
        data: {
          name: "Python para Análise de Dados",
          description: "Aprenda a utilizar a linguagem Python para análise e manipulação de dados.",
          author_id: "c13a1794-7db2-4df1-8d42-ec5dd1c0976c",
          isAproved: true,
          body: `
            # Python para Análise de Dados
    
            Python é uma linguagem de programação popular entre cientistas de dados e analistas devido
            à sua facilidade de uso e às bibliotecas robustas para análise e manipulação de dados.
            Neste curso, você aprenderá a usar Python para extrair insights valiosos de conjuntos de dados.
    
            Conteúdo do curso:
    
            - **Bibliotecas para Análise:** introdução ao NumPy, pandas e Matplotlib.
            - **Manipulação de Dados:** filtragem, transformação e agregação de dados.
            - **Visualização de Dados:** criação de gráficos e visualizações informativas.
            - **Análise Estatística:** aplicação de estatísticas descritivas e inferenciais.
            
            A análise de dados é uma habilidade essencial no mundo atual, e Python é uma das
            principais ferramentas para isso. Ao concluir este curso, você estará preparado para
            explorar e interpretar dados de maneira eficaz.
          `,
        },
        include: {
          author: true,
        },
      }),
    
      await prisma.course.create({
        data: {
          name: "Desenvolvimento de Aplicações Mobile com Flutter",
          description: "Aprenda a criar aplicativos móveis multiplataforma com o framework Flutter.",
          author_id: "c13a1794-7db2-4df1-8d42-ec5dd1c0976c",
          isAproved: true,
          body: `
            # Desenvolvimento de Aplicações Mobile com Flutter
    
            Flutter é um framework de desenvolvimento móvel que permite criar aplicativos nativos para
            Android e iOS a partir de um único código-base. Neste curso, você explorará os conceitos
            básicos do Flutter e criará aplicativos mobile altamente funcionais.
    
            Tópicos abordados:
    
            - **Widgets e UI:** criação de interfaces de usuário com widgets personalizáveis.
            - **Navegação:** navegação entre telas e fluxos de aplicativos.
            - **Integração de API:** obtenção e exibição de dados de APIs externas.
            - **Acesso a Dispositivos:** uso de recursos como câmera e localização.
            
            O desenvolvimento mobile é uma área em crescimento, e Flutter oferece uma abordagem
            moderna e eficiente. Com este curso, você estará pronto para criar aplicativos móveis
            atraentes e funcionais em pouco tempo.
          `,
        },
        include: {
          author: true,
        },
      }),
      await prisma.course.create({
        data: {
          name: "Introdução a JavaScript",
          description: "Aprenda os fundamentos da linguagem de programação JavaScript.",
          author_id: "c13a1794-7db2-4df1-8d42-ec5dd1c0976c",
          isAproved: true,
          body: `
            # Introdução a JavaScript
    
            JavaScript é uma linguagem de programação amplamente utilizada para criar
            interatividade em páginas web. Ela permite adicionar comportamentos dinâmicos
            e manipular elementos da página em tempo real.
    
            Alguns tópicos que você aprenderá neste curso:
            
            - **Sintaxe básica:** variáveis, tipos de dados, operadores.
            - **Estruturas de controle:** condicionais, loops.
            - **Funções:** criação e uso de funções.
            - **Manipulação do DOM:** como interagir com os elementos da página.
            
            Dominar JavaScript é essencial para construir aplicações web interativas e
            dinâmicas. Com este curso, você estará no caminho certo para se tornar um
            desenvolvedor web completo!
          `,
        },
        include: {
          author: true,
        },
      }),
    
      await prisma.course.create({
        data: {
          name: "Banco de Dados SQL",
          description: "Aprenda a projetar e gerenciar bancos de dados relacionais com SQL.",
          author_id: "c13a1794-7db2-4df1-8d42-ec5dd1c0976c",
          isAproved: true,
          body: `
            # Banco de Dados SQL
    
            O SQL (Structured Query Language) é uma linguagem de consulta usada para gerenciar e
            manipular bancos de dados relacionais. Neste curso, você aprenderá os fundamentos do SQL,
            desde a criação de tabelas até consultas avançadas.
    
            Tópicos abordados neste curso:
    
            - **Modelagem de dados:** criação de tabelas, definição de chaves primárias e estrangeiras.
            - **Consultas:** seleção de dados, filtragem, ordenação.
            - **Junções:** combinação de dados de múltiplas tabelas.
            - **Operações de modificação:** inserção, atualização e exclusão de dados.
            
            Compreender SQL é crucial para quem deseja trabalhar com bancos de dados e
            sistemas de gerenciamento de dados. Ao concluir este curso, você estará preparado
            para projetar e consultar bancos de dados relacionais de maneira eficiente.
          `,
        },
        include: {
          author: true,
        },
      }),
      await prisma.course.create({
        data: {
          name: "Machine Learning Fundamentals",
          description: "Learn the basics of machine learning and its applications.",
          author_id: "c13a1794-7db2-4df1-8d42-ec5dd1c0976c",
          isAproved: true,
          body: `
            # Machine Learning Fundamentals
    
            Machine learning is a subfield of artificial intelligence that focuses on developing algorithms
            and models that allow computers to learn patterns from data. In this course, you'll explore the
            foundational concepts of machine learning and understand its real-world applications.
    
            Course topics:
    
            - **Supervised Learning:** classification and regression.
            - **Unsupervised Learning:** clustering and dimensionality reduction.
            - **Model Evaluation:** assessing the performance of machine learning models.
            - **Feature Engineering:** selecting and transforming features for better performance.
            
            Understanding machine learning is crucial in today's data-driven world. By completing this
            course, you'll have a solid grasp of the key concepts and techniques used in machine learning.
          `,
        },
        include: {
          author: true,
        },
      }),
    
      await prisma.course.create({
        data: {
          name: "Cybersecurity Essentials",
          description: "Learn the fundamentals of cybersecurity and how to protect digital assets.",
          author_id: "c13a1794-7db2-4df1-8d42-ec5dd1c0976c",
          isAproved: true,
          body: `
            # Cybersecurity Essentials
    
            As technology advances, the importance of cybersecurity grows. In this course, you'll dive into
            the fundamental concepts of cybersecurity and learn how to safeguard digital information and
            assets from various threats.
    
            Course content:
    
            - **Types of Threats:** exploring different types of cyberattacks and vulnerabilities.
            - **Network Security:** securing networks against unauthorized access.
            - **Encryption:** understanding the principles of encryption for data protection.
            - **Security Best Practices:** implementing security measures and policies.
            
            With the increasing reliance on digital systems, cybersecurity is a critical skill. By completing
            this course, you'll be equipped to take proactive steps to defend against cyber threats.
          `,
        },
        include: {
          author: true,
        },
      }),
    
      await prisma.course.create({
        data: {
          name: "Advanced Data Visualization with D3.js",
          description: "Master the art of creating interactive data visualizations using D3.js.",
          author_id: "c13a1794-7db2-4df1-8d42-ec5dd1c0976c",
          isAproved: true,
          body: `
            # Advanced Data Visualization with D3.js
    
            D3.js is a powerful JavaScript library for creating custom data visualizations on the web. In this
            course, you'll take your data visualization skills to the next level by creating interactive and
            dynamic visualizations.
    
            Course topics:
    
            - **Selections and Transitions:** manipulating DOM elements for animations.
            - **Scales and Axes:** creating scales to map data to visual attributes.
            - **Interactivity:** adding user interactions to enhance visualizations.
            - **Custom Visualizations:** building complex and custom visualizations.
            
            Effective data visualization is crucial for conveying insights. By completing this course, you'll
            be able to create compelling visualizations that engage and inform your audience.
          `,
        },
        include: {
          author: true,
        },
      }),
    
      await prisma.course.create({
        data: {
          name: "Cloud Computing Essentials",
          description: "Learn the fundamentals of cloud computing and its benefits.",
          author_id: "c13a1794-7db2-4df1-8d42-ec5dd1c0976c",
          isAproved: true,
          body: `
            # Cloud Computing Essentials
    
            Cloud computing has revolutionized the way we deploy, manage, and scale applications and
            services. In this course, you'll explore the core concepts of cloud computing and understand
            how to leverage cloud services effectively.
    
            Course content:
    
            - **Cloud Deployment Models:** public, private, and hybrid clouds.
            - **Cloud Service Models:** IaaS, PaaS, and SaaS.
            - **Cloud Providers:** exploring popular cloud providers and their offerings.
            - **Benefits and Challenges:** understanding the advantages and considerations of cloud computing.
            
            Cloud computing is an essential skill for modern IT professionals. By completing this course,
            you'll be equipped to harness the power of the cloud for various applications.
          `,
        },
        include: {
          author: true,
        },
      }),
    
      await prisma.course.create({
        data: {
          name: "Ethical Hacking Fundamentals",
          description: "Learn the basics of ethical hacking and how to secure computer systems.",
          author_id: "c13a1794-7db2-4df1-8d42-ec5dd1c0976c",
          isAproved: true,
          body: `
            # Ethical Hacking Fundamentals
    
            Ethical hacking involves testing computer systems for vulnerabilities in order to identify and
            rectify potential security risks. In this course, you'll delve into the world of ethical hacking and
            learn how to ensure the security of digital assets.
    
            Course topics:
    
            - **Footprinting and Reconnaissance:** gathering information about target systems.
            - **Scanning and Enumeration:** identifying open ports and services.
            - **Vulnerability Assessment:** discovering potential security weaknesses.
            - **Penetration Testing:** simulating attacks to assess system defenses.
            
            With the rise of cyber threats, ethical hacking skills are in high demand. By completing this
            course, you'll gain the knowledge needed to help protect organizations from cyber threats.
          `,
        },
        include: {
          author: true,
        },
      }),
    

    ])
    
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })