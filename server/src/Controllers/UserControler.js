const User = require('../models/ModelUser');




module.exports = {
    async store(req,res){
        
        const user = await User.create(req.body);
        if(!user){
           return res.status(400).json({
                Error: ['Não foi possível criar um usuário ']
            })
        }
        res.status(200).json(user)
        
    },

    async index(req,res){ 
        const user = await User.findAll();
        res.json(user)
    }
}