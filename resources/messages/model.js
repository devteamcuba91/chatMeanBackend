const mongoose = require('mongoose');


const schema = new mongoose.Schema({
    emitter:{
        type: mongoose.Schema.Types.ObjectId,
        required: [true,'a emitter is required'],
        ref: 'User'
    },
    room:{
        type: mongoose.Schema.Types.ObjectId,
        required: [true,'a room is required'],
        ref: 'Room'
    },
    isReply:{
        type: Boolean,
        default: false
    },
    onReplyTo:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message',
    },
    date:{
        type: Date,
        default: new Date()
    },
    isFile:{
        type: Boolean,
        default: false
    },
    content:{
        type: String,
        maxlength:[1000,'please do not exceed 1000 characters per message'],
        required: [true,'empty messages are not allowed'],
    }
});

schema.pre('save',function(next){
    this.onReplyTo.required = [
        this.isReply,
        'no message to reply detected, plesase provide it'
    ];
    next();
});

const Message = mongoose.model('message',schema);
module.exports.Message = Message;