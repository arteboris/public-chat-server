const { Router } = require('express');
const messagesValidator = require('./messages.validator');
const messagesController = require('./messages.controller');
const checkUrl = require('../helpers/check.url')

const messagesRouter = Router();

messagesRouter
.get('/list/:id', messagesController.sendMessages)
.get('/single/:id', messagesController.sendMessageId)
.post('/', checkUrl, messagesValidator.createMessage,
messagesController.createMessage);

module.exports = messagesRouter;