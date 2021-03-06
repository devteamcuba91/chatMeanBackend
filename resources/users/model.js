const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    profilePhoto:{
        type: String,
        default: 'defUsrImg.png'
    },
    tokenExpiresOn:{
        type: Date,
        default: new Date(Date.now()+ 90*24*60*60*1000) //90 days from now
    },
    active:{
        type: Boolean,
        default: true,
    },
    username:{
        type: String,
        minlength:[4,'please provide a username with no less than 4 characters'],
        maxlength:[25,'please use a username shorter than 25 characters'],
        required:[true, 'please provide a valid username'],
        validate:{
            validator: (input)=>{ 
                return /^\w{4,25}$/.test(input);
            },
            message: 'please provide a valid username, use only letters and digits'
        }
    },
    email:{
        unique:[true,'email must be unique'],
        required: [true, 'please provide an email'],
        type: String,
        validate: {
            validator: (input)=>{
                return /^.{3,25}@\w{3,10}.[a-z]{2,6}(.[a-z]{2,3})?$/.test(input);
            },
            message: 'please provide a valid email example@domain.ext'
        }
    },
    phone:{
        type: String,
        required: [true,'please provide a valid phone number'],
        validate:{
            validator: (input)=>{
                return /^\d+$/.test(input) && 8 <= input.length <= 12  ;
            },
            message: 'please provide a valid phone number, 8 to 12 digits only'
        }
    },
    password:{
        type: String,
        required: [true,'please provide a password'],
        minlength:[8,'password should be at least 8 characters,1 uppercase and 1 special character'],
        validate:{
            validator:(input)=>{
                return /\d+/.test(input) && /[A-Z]+/.test(input) && /[a-z]+/.test(input) &&  /\W+/.test(input) && !/\s+/.test(input);
             },
            message: 'password should be at least 8 characters,1 uppercase and 1 special character'
        }
    },
    passwordChangedAt:{
        type: Date,
    },
    role:{
        type: String,
        enum:['user','admin'],
        default: 'user'
    },
    resetToken:{
        type: String
    },
    resetTokenExpiration:{
        type: Date
    },
    rooms:{
        type:[mongoose.Schema.Types.ObjectId],
        default:[],
        ref: 'Room'
    },
    contacts:{
        type:[mongoose.Schema.Types.ObjectId],
        default:[],
        ref: 'User'
    }    
});


const User = mongoose.model('user',schema);
module.exports.User = User;