import express from 'express'
import { routes } from './routes'

import cors from 'cors'
import { config } from 'dotenv';
import path from 'path'
config();

const PORT = process.env.PORT || 8080;

const app = express();
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
       console.log('Http Server is running')
})

export default app;
