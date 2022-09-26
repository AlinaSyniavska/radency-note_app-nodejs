import * as dotenv from 'dotenv';
import * as mongoose from 'mongoose';
import express, {Application, NextFunction, Request, Response} from "express";

dotenv.config();

import {config} from "./configs";
import {noteRouter} from './routes';

mongoose.connect(config.MONGO_URL);

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/notes', noteRouter);

app.use('*', (req, res) => {
    res.status(404).json('Route not found');
});

app.use((err: any, req: Request, res: Response, next: NextFunction): void => {
    res.status(err.status || 400).json({
        error: err.message || 'Unknown Error',
        code: err.status || 400,
    });
});

app.listen(config.PORT, () => {
    console.log(`Started on port ${config.PORT}`);
});



