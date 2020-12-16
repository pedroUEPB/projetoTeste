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
            where: { usuario: req.body.usuario },
            include:[{
                model:Professor,
                attributes:['id', 'fk_pessoa', 'usuario', 'senha'],
                model:Pessoa,
                attributes:['nome']
            }]
        });
        if (professor === null) {
          console.log('Not found!');
        } /*else {
          console.log(professor instanceof Professor); // true
          console.log(professor);
          console.log(professor.Pessoa); // 'My Title'
        }*/
        //const dt = {id: professor.id, fk_pessoa: professor.fk_pessoa, nome: professor.Pessoa.nome};
        return res.status(200).json({id: professor.id, fk_pessoa: professor.fk_pessoa, nome: professor.Pessoa.nome});
    }
}