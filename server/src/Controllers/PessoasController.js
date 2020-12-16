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
    },
    //deletar professor por id
    async deleteProfessor(req, res){
        const professor = await Professor.findByPk(req.body.id);
        const pess = await Pessoa.findByPk(req.body.fk_pessoa);
        await Professor.destroy(professor);
        if(!professor){
            return res.status(400).json({
                Error:['Não foi possivel deletar o projeto']
            })
        }
        await Pessoa.destroy(pess);
        return res.status(200).json({
            Sucess:['Removido com sucesso']
        })
    },
    //put professor
    async changeProfessor(req, res){
        const {user, pessoa} = req.body;
        const professor = await Professor.findByPk(user.id);
        const pess = await Pessoa.findByPk(pessoa.id);
        await professor.save(user);
        if(!professor){
            return res.status(400).json({
                Error:['Não foi possivel editar o aluno']
            })
        }
        await pess.save(pessoa);
        return res.status(200).json()
    },
    //deletar aluno por id
    async deleteAluno(req, res){
        const aluno = await Aluno.findByPk(req.body.id);
        const pessoa = await Pessoa.findByPk(req.body.fk_pessoa);
        await aluno.destroy();
        await pessoa.destroy();
        if(!aluno){
            return res.status(400).json({
                Error:['Não foi possivel deletar o aluno']
            })
        }
        return res.status(200).json({
            Sucess:['Removido com sucesso']
        })
    },
    //put aluno
    async changeAluno(req, res){
        const {user, pessoa} = req.body;
        const aluno = await Aluno.findByPk(user.id);
        const pess = await Pessoa.findByPk(pessoa.id);
        await aluno.save(user);
        if(!aluno){
            return res.status(400).json({
                Error:['Não foi possivel editar o aluno']
            })
        }
        await pess.save(pessoa);
        return res.status(200).json(aluno)
    }


}