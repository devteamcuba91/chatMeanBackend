const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    members:{
        type:[mongoose.Schema.Types.ObjectId],
        ref: 'User',
        required: [true, 'provide at least one user ']
    },
    name:{
        type: String,
    },
    picture:{
        type: String,
        default: 'defUsrImg.png'
    }  
});

schema.pre('save',function(next){
    this.name.required = [
        this.members.length >= 2,
        'please provide a name for a new room'
    ];
});


const Room = mongoose.model('room',schema);
module.exports.Room = Room;