
import express from 'express'
import { routes } from './routes'
import cors from 'cors'


const PORT = 8080;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
       console.log('Http Server is running')
})

export default app;