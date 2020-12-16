const Professor = require('../models/ModelProfessor')
module.exports = {
    async store(req, res){
        
            const professor = await Professor.create(req.body)
            if(!professor){
             return res.status(400).json({
                 Error:['Não foi possível criar um Professor']
             })
         }
         return res.status(200).json(professor);
         
    }
}