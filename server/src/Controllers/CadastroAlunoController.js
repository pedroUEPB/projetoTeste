const CadAluno = require('../models/ModelCadastroAluno');
const Professor = require('../models/ModelProfessor');
module.exports = {
    async store(req,res){

        const cadAluno = await Professor.create(req.body)
        if(!cadAluno){
            return res.status(400).json({
                Error:['Não foi possível criar um Cadastro de Aluno']
            })
        }
        return res.status(200).json(cadAluno);
    },

    async index(req,res){
        const cadAluno = await Professor.findAll()
        if(!cadAluno){
            return res.status(400).json({
                Error:['Não existe cadastro de alunos']
            })
        }
        return res.status(200).json(cadAluno);
    }
    
}