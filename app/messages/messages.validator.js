const validator = require('node-validator');

class MessagesValidator {
    get createMessage() {
        return this._createMessage.bind(this);
    };

    async _createMessage(req, res, next) {
        try {
            const createMessageRules = validator.isObject()
            .withRequired("email", validator.isString({regex: /@/i, message: 'Invalid value. Value must be real email, <@>.'}))
            .withRequired("text", validator.isString({regex: /^([a-zA-Z0-9\s@,!=%$#&_-\u0600-\u065f\u066a-\u06EF\u06fa-\u06ff\ufb8a\u067e\u0686\u06af\u0750-\u077f\ufb50-\ufbc1\ufbd3-\ufd3f\ufd50-\ufd8f\ufd92-\ufdc7\ufe70-\ufefc\uFDF0-\uFDFD]).{1,100}$/, message: 'Invalid value. Text must be not empty and length < 100 '}))
    
            await validator.run(createMessageRules, req.body, (errCount, errors) => {
            if(errCount) return res.status(400).json(errors);
    
                next();
            });
        } catch(err){
            next(err);
        };
    };
};

module.exports = new MessagesValidator(); 