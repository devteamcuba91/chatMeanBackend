const { User} = require('./model');


module.exports.getMe = (req, res)=>{
    res.status(200).json({
        status:'success',
        message: 'this endpoint works fine',
        data:{data:'ok'}
    });
};

module.exports.updatePassword = (req, res)=>{
    res.status(200).json({
        status:'success',
        message: 'this endpoint works fine',
        data:{data:'ok'}
    });
};

module.exports.updateProfile = (req, res)=>{
    res.status(200).json({
        status:'success',
        message: 'this endpoint works fine',
        data:{data:'ok'}
    });
};

module.exports.getContacts = (req, res)=>{
    res.status(200).json({
        status:'success',
        message: 'this endpoint works fine',
        data:{data:'ok'}
    });
};

module.exports.postContact = (req, res)=>{
    res.status(200).json({
        status:'success',
        message: 'this endpoint works fine',
        data:{data:'ok'}
    });
};

module.exports.updateContacts = (req, res)=>{
    res.status(200).json({
        status:'success',
        message: 'this endpoint works fine',
        data:{data:'ok'}
    });
};

module.exports.deleteProfile = (req, res)=>{
    res.status(200).json({
        status:'success',
        message: 'this endpoint works fine',
        data:{data:'ok'}
    });
};

module.exports.getUsers = (req, res)=>{
    res.status(200).json({
        status:'success',
        message: 'this endpoint works fine',
        data:{data:'ok'}
    });
};

module.exports.getUserById = (req, res)=>{
    res.status(200).json({
        status:'success',
        message: 'this endpoint works fine',
        data:{data:'ok'}
    });
};

module.exports.updateUserById = (req, res)=>{
    res.status(200).json({
        status:'success',
        message: 'this endpoint works fine',
        data:{data:'ok'}
    });
};

module.exports.deleteUserById = (req, res)=>{
    res.status(200).json({
        status:'success',
        message: 'this endpoint works fine',
        data:{data:'ok'}
    });
};