const messagesModel = require('./messages.model');

class MessagesController {
    get sendMessages() {
        return this._sendMessages.bind(this);
    };

    async sendMessages(req, res, next) {
        const page = +req.params.id;
        try{
            const messages = await messagesModel.sendMessages(page + 1);
            if(!messages) return res.status(400).json({status: 'failed', messages: 'not found messages'});

            return res.status(200).json({status: 'success', messages: messages});
        } catch(err) {
            return next(err);
        };
    };

    get sendMessageId() {
        return this._sendMessageId.bind(this);
    };

    async sendMessageId(req, res, next) {
        const id = req.params.id;
        try{
            const message = await messagesModel.sendMessageId(id);
            if(!message) return res.status(400).json({status: 'failed', message: 'not found message'});

            return res.status(200).json({status: 'success', message: message});
        } catch(err) {
            return next(err);
        };
    };

    get createMessage() {
        return this._createMessage.bind(this);
    };
    
    async _createMessage(req, res, next) {
        const {email, text} = req.body;
        try {
            const message = await messagesModel.createMessage(email, text);
            await message.save((err, data) => {
                if(err) return res.status(400).json(err);

                return res.status(201).json({status: 'success', message: data})
            });
        } catch(err) {
            next(err);
        };
    };
};

module.exports = new MessagesController();


