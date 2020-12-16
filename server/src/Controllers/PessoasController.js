const Pessoa = require('../models/ModelPessoa')
const Professor = require('../models/ModelProfessor')
const Aluno = require('../models/ModelAluno')

module.exports = {
    async storeProfessor(req, res) {

        const { user, pessoa } = req.body
        const dadosPessoa = await Pessoa.create(pessoa)



        if (!dadosPessoa) {
            return res.status(400).json({
                Error: ['Não foi possível criar um pessoa']
            })
        }
        const { id } = dadosPessoa;
        const professor = await Professor.create({ ...user, fk_pessoa: id })


        if (!professor) {
            return res.status(400).json({
                Error: ['Professor não foi criado']
            })
        }

        return res.status(200).json({ dadosPessoa, professor });
    },
    //cadastro aluno
    async storeAluno(req, res) {

        const { user, pessoa } = req.body
        const dadosPessoa = await Pessoa.create(pessoa)



        if (!dadosPessoa) {
            return res.status(400).json({
                Error: ['Não foi possível criar um pessoa']
            })
        }
        const { id } = dadosPessoa;
        const al = await Aluno.create({ ...user, fk_pessoa: id })


        if (!al) {
            return res.status(400).json({
                Error: ['Professor não foi criado']
            })
        }

        return res.status(200).json({ dadosPessoa, al });
    },
    async index(req, res){
        
        const dadosPessoa = await Pessoa.findAll({
            order:[['id','desc']],
            include:[{
                model:Professor,
                attributes:['matricula','usuario']
            }]
        });
        
        res.json(dadosPessoa)
    }


}