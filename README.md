

# Project: Server

This project is under development and seeks to demonstrate the process of my course completion work

To run the example locally you need to:

1. Clone this repository git clone https://github.com/ruan177/Server
2. `npm install` and `npm install -D`  to install the required dependencies.
3. Create a `.env` file inside the **prisma** folder and add the `DATABASE_URL` value of the MYSQL database instance you would like to use.
4. Execute `npx prisma generate` to generate the correct data source client code.
5. Execute `npx prisma prisma migrate dev` to create a new migration.
6. Execute `npx prisma studio` to open up the Prisma Studio.
7. Execute `npm run dev` for run the server.


