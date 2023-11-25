import express from 'express';
import 'dotenv/config'
import serverRoutes from './routes/servers.js';
import cors from 'cors';

const app = express()

app.use(cors())

const PORT = process.env.PORT ?? 3001

app.use(serverRoutes);

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`)
});
