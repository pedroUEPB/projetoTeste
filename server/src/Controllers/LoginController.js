const Aluno = require('../models/ModelAluno')
const Professor = require('../models/ModelProfessor')

module.exports = {
    async indexLoginAluno(req, res){
        const user = req.body.user;
        //console.log(user)
        const dados = await Aluno.findOne({
            where: {usuario: user}
        })
        //console.log(dados);
        if(!dados){
            return res.status(200).json("ok")
        }
        return res.status(200).json("opa");
    },

    async indexLoginProfessor(req, res){
        const user = req.body.user;
        //console.log(user)
        const dados = await Professor.findOne({
            where: {usuario: user}
        })
        //console.log(dados);
        if(!dados){
            return res.status(200).json("ok")
        }
        return res.status(200).json("opa");
    }
}