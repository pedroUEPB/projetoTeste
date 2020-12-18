const Projeto = require('../models/ModelProjeto');
const { indexLoginProfessor } = require('./LoginController');

module.exports = {
    //create projeto
    async store(req, res) {
        console.log(req.body);
        const dadosProjeto = await Projeto.create(req.body)

        if (!dadosProjeto) {
            return res.status(400).json({
                Error: ['Não foi possível criar um projeto']
            })
        }

        return res.status(200).json(dadosProjeto);
    },

    async index(req, res) {
        const projetos = await Projeto.findAll({
            include: [{
                //where: {id: projeto.fk_professor},
                association: 'Professor', required: true,
                attributes: ['fk_pessoa'],
                include: [{
                    //where: {id: fk_pessoa},
                    association: 'Pessoa', required: true,
                    attributes: ['nome']
                }]
            }]
        });
        if (!projetos) {
            return res.status(400).json({
                Error: ['Nenhum projeto cadastrado']
            })
        }
        return res.status(200).json(projetos);
    },

    async indexOne(req, res){
        const {id} = req.body;
        console.log(id);
        const projeto = await Projeto.findOne({
            where: {id: id},
            /*include:[{
                association: 'Professor', required: true,
                attributes:['fk_professor'],
                include:[{
                    association: 'Pessoa', required: true,
                    attributes:['nome']
                }]
            }]*/
        })
        if(!projeto){
            return res.status(400).json({
                Error:['Não encontrado']
            })
        }
        return res.status(200).json(projeto);
    },
    //pegar projetos do professor
    async indexProfessor(req, res) {
        const { id } = req.body;
        //console.log(fk_prof);
        const projetos = await Projeto.findAll({
            where: { fk_professor: id }
        });
        if (!projetos) {
            return res.status(400).json({
                Error:['Não encontrado']
            })
        }
        return res.status(200).json(projetos);
    },
    //deletar projeto por id
    async delete(req, res) {
        const projeto = await Projeto.findByPk(req.body.id);
        /*const cadastrosAl = await CadastroAluno.findAll({
            where: {fk_projeto: projeto.id}
        })
        if(cadastrosAl.length > 0){
            cadastrosAl.forEach(cadAl=>{
                await CadastroAluno.destroy(cadAl);
            })
        }*/
        await projeto.destroy();
        if (!projeto) {
            return res.status(400).json({
                Error: ['Não foi possivel deletar o projeto']
            })
        }
        return res.status(200).json({
            Sucess: ['Projeto removido com sucesso']
        })
    },
    //put projeto
    async change(req, res) {
        const projeto = await Projeto.findByPk(req.body.id);
        await projeto.save(req.body);
        if (!projeto) {
            return res.status(400).json({
                Error: ['Não foi possivel editar o projeto']
            })
        }
        return res.status(200).json(projeto)
    }


}
