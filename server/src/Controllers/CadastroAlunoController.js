const CadAluno = require('../models/ModelCadAluno');
const Professor = require('../models/ModelProfessor');
const Aluno = require('../models/ModelAluno');
const CadAlunos = require('../models/ModelCadAluno');
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
        /*const idC = req.body;
        console.log(idC)*/
        const cadAluno = await CadAluno.findOne({
            where: {id: req.body.idC}
        })
        if(!cadAluno){
            return res.status(400).json({
                Error:['Cadastro de aluno não encontrado']
            })
        }
        return res.status(200).json(cadAluno);
    },

    async delete(req, res){
        //const {idProj, matric} =  req.body;
        const cadastro = await Aluno.findByPk(req.body.id);
        
        if(!cadastro){
            return res.status(400).json({
                Error:['Cadastro não encontrado']
            })
        }
        await cadastro.destroy();
        if(!cadastro){
            return res.status(400).json({
                Error:['Não foi possivel apagar']
            })
        }
        return res.status(200).json({
            Sucess:['Cadastro apagado']
        })
    },
    async change(req, res){
        const {id, fk_aluno, fk_projeto, form} = req.body;
        //console.log(cadastro);
        const cad = await CadAlunos.findByPk(id);
        if(!cad){
            return res.status(400).json({
                Error:['Cadastro não encontrado']
            })
        }
        await cad.save({id, fk_aluno, fk_projeto, form});
        return res.status(200).json({
            Sucess:['Cadastro alterado']
        })
    }
}