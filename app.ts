require('dotenv').config();
const {config} = require('./configs');
const express = require('express');
const mongoose = require('mongoose');

import {Application} from "express";

mongoose.connect(config.MONGO_URL);

const app: Application = express();

app.use(express.json());


app.use('*', (req, res) => {
    res.status(404).json('Route not found');
});

/*app.use((err, req, res, next) => {
    res.status(err.status || 400).json({
        error: err.message || 'Unknown Error',
        code: err.status || 400,
    });
});*/

app.listen(config.PORT, () => {
    console.log(`Started on port ${config.PORT}`);
});



