import express from 'express';
import cors from 'cors';

import { PORT } from './config/serverConfig.js';
import apiRouter from './routes/index.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/ping', (req, res) => {
    return res.json({message: 'pong'});
});

app.use('/api', apiRouter);  //TODO: Covert it to only / 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

