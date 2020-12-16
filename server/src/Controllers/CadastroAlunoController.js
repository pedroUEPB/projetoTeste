const CadAluno = require('../models/ModelCadAluno');
const Professor = require('../models/ModelProfessor');
const Aluno = require('../models/ModelAluno');
module.exports = {
    async store(req,res){
        const {idProj, matric, form} = req.body;
        const al = await Aluno.findOne({
            where: {matricula: matric}
        })
        if(!al){
            return res.status(400).json({
                Error:['Aluno não encontrado']
            })
        }
        const cadAluno = await CadAluno.create({fk_aluno: al.id, fk_projeto: idProj, formacao: form})
        if(!cadAluno){
            return res.status(400).json({
                Error:['Não foi possível criar um Cadastro de Aluno']
            })
        }
        return res.status(200).json(cadAluno);
    },

    async index(req,res){
        const cadAluno = await CadAluno.findAll()
        if(!cadAluno){
            return res.status(400).json({
                Error:['Não existe cadastro de alunos']
            })
        }
        return res.status(200).json(cadAluno);
    },

    async delete(req, res){
        const {idProj, matric} =  req.body;
        const aluno = await Aluno.findOne({
            where: {matricula: matric}
        })
        const dt = await CadAluno.findOne({
            where: {fk_projeto: idProj, fk_aluno:aluno.id}
        })
        if(!dt){
            return res.status(400).json({
                Error:['Aluno não encontrado']
            })
        }
        dt.destroy();
        return res.status(200).json({
            Sucess:['Aluno deletado com sucesso']
        })
    }
    
}