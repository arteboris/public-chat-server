const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config');
const options = require('./helpers/options');
const mainRouter = require('./main/main');
const messagesRouter = require('./messages/messages.router');

init();

async function init() {
    const app = express();
    await connectToDb(config);

    initMiddleware(app);
    initRouters(app);

    app.listen(config.port);
};

function initMiddleware(app) {
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(cors('*'));
};

function initRouters(app) {
    app.use('/', mainRouter);
    app.use('/api/messages', messagesRouter);
    app.use('*', (req, res) => {
        return res.status(400).json({SmartBin: 'Invalid URL', message: 'сheck, please URL'});
     });
};

async function connectToDb(config) {
    try {
        const url = config.mongodb_url;
        await mongoose.connect(url, options);
    } catch (err) {
        throw err;
        process.exit(1);
    };
};