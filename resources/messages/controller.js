module.exports.createMessage = (req, res)=>{
    res.status(200).json({
        status:'success',
        message: 'this endpoint works fine',
        data:{data:'ok'}
    });
};

module.exports.getMessagesFromRoom = (req, res)=>{
    res.status(200).json({
        status:'success',
        message: 'this endpoint works fine',
        data:{data:'ok'}
    });
};

module.exports.deleteMessageById = (req, res)=>{
    res.status(200).json({
        status:'success',
        message: 'this endpoint works fine',
        data:{data:'ok'}
    });
};