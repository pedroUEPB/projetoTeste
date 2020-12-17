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
            where: { usuario: req.body.usuario, senha: req.body.senha },
            include:[{
                model:Professor,
                attributes:['id', 'fk_pessoa', 'usuario', 'senha'],
                model:Pessoa,
                attributes:['nome']
            }]
        });
        if (professor === null) {
          console.log('Not found!');
        }
        return res.status(200).json({id: professor.id, fk_pessoa: professor.fk_pessoa, nome: professor.Pessoa.nome});
    },

    async index(req, res){
        const { idU } = req.body;
        const dados = await Professor.findByPk(idU)
        if(!dados){
            return res.status(400).json({
                Error:['Usuario não encontrado']
            })
        }
        console.log(dados)
        const dados2 = await Pessoa.findByPk(dados.fk_pessoa)
        if(!dados2){
            return res.status(400).json({
                Error:['Pessoa não encontrada']
            })
        }
        return res.status(200).json({dados, dados})
    }
}