const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const { Schema } = mongoose;

const messageSchema = new Schema({
    email: {type: String, required: true},
    text: {type: String, required: true, minlength: 1, maxlength: 100},
}, {
    versionKey: false,
    timestamps: true,
});

messageSchema.plugin(mongoosePaginate);

messageSchema.statics.sendMessages = sendMessages;
messageSchema.statics.sendMessageId = sendMessageId;
messageSchema.statics.createMessage = createMessage;

async function sendMessages(page) {
    const options = {
        page,
        limit: 10,
      };
    try{
        return await this.paginate({}, options);
    } catch(err){
        return null;
    };
};

async function sendMessageId(id) {
    try{
        return await this.findById(id);
    } catch(err) {
        return null;
    };
};

async function createMessage(email, text) {
    try{
        return await this({
            email,
            text,
        });
    } catch(err) {
        throw err;
    }
}

const messagesModel = mongoose.model('Messages', messageSchema);
module.exports = messagesModel;