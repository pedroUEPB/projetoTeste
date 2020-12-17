const Professor = require('../models/ModelProfessor')
const Pessoa = require('../models/ModelPessoa');

module.exports = {
    async store(req, res){
        
        const professor = await Professor.create(req.body)
        if(!professor){
            return res.status(400).json({
                Error:['Não foi possível criar um Professor']
            })
        }
        return res.status(200).json(professor);
         
    },
    async login(req, res){
        const professor = await Professor.findOne({
            where: { usuario: req.body.usuario, senha: req.body.senha }
        });
        if (!professor) {
            return res.status(400).json({
                Error:['Não cadastrado']
            })
        }
        return res.status(200).json({id: professor.id, fk_pessoa: professor.fk_pessoa});
    },

    async index(req, res){
        const { idU } = req.body;
        //console.log(req.body);
        const user = await Professor.findByPk(idU)
        if(!user){
            return res.status(400).json({
                Error:['Usuario não encontrado']
            })
        }
        const pessoa = await Pessoa.findByPk(user.fk_pessoa)
        //console.log(pessoa)
        if(!pessoa){
            return res.status(400).json({
                Error:['Pessoa não encontrada']
            })
        }
        return res.status(200).json({user, pessoa})
    }
}