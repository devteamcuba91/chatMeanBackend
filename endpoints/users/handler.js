const { User} = require('./schema');


module.exports.getMeHandler = (req, res)=>{
    res.status(200).json({user: 'succes'})
}

module.exports.getUsersHandler = async(req, res)=>{
    const users = await User.find()

    res.status(200).json({
        status:'success',
        data: users 
    })
}