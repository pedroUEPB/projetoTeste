const Aluno = require('../models/ModelAluno')
const Pessoa = require('../models/ModelPessoa')
module.exports = {
    async store(req, res) {

        const aluno = await Aluno.create(req.body)
        if (!professor) {
            return res.status(400).json({
                Error: ['Não foi possível criar um Professor']
            })
        }
        return res.status(200).json(aluno);

    },
    async login(req, res){
        const aluno = await Aluno.findOne({
            where: { usuario: req.body.usuario, senha: req.body.senha }
        });
        if (!aluno) {
            return res.status(400).json({
                Error:['Não cadastrado']
            })
        }
        return res.status(200).json({id: aluno.id, fk_pessoa: aluno.fk_pessoa});
    },

    async index(req, res) {
        const { idAl, idP } = req.body;
        const al = await Aluno.findByPk(idPr);
        if (!al) {
            return res.status(400).json({
                Error: ['Professor não encontrado']
            })
        }
        const p = await Pessoa.findByPk(idP);
        if (!p) {
            return res.status(400).json({
                Error: ['Professor não encontrado']
            })
        }
        return res.status(200).json({ al, p })
    }
}
