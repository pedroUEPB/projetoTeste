const Professor = require('../models/ModelProfessor');
const Projeto = require('../models/ModelProjeto');
const CadastroAluno = require('../models/ModelCadAluno');

module.exports = {
    //create projeto
    async store(req, res) {

        const dadosProjeto = await Projeto.create(req.body)

        if (!dadosProjeto) {
            return res.status(400).json({
                Error: ['Não foi possível criar um projeto']
            })
        }

        return res.status(200).json(dadosProjeto);
    },
    //pegar projetos do professor
    async indexProfessor(req, res){
        const {fk_prof} = req.body;
        //console.log(fk_prof);
        const projetos = await Projeto.findAll({
            where: { fk_professor: fk_prof }
        });
        if(!projetos){
            return res.status(400).json({
                Error: ['Nenhum projeto encontrado']
            })
        }
        return res.status(200).json(projetos);
    },
    //deletar projeto por id
    async delete(req, res){
        const projeto = await Projeto.findByPk(req.body.id);
        const cadastrosAl = await CadastroAluno.findAll({
            where: {fk_projeto: projeto.id}
        })
        if(cadastrosAl.length > 0){
            cadastrosAl.forEach(cadAl=>{
                /*await*/ CadastroAluno.destroy(cadAl);
            })
        }
        await projeto.destroy();
        if(!projeto){
            return res.status(400).json({
                Error:['Não foi possivel deletar o projeto']
            })
        }
        return res.status(200).json({
            Sucess:['Removido com sucesso']
        })
    },
    //put projeto
    async change(req, res){
        const projeto = await Projeto.findByPk(req.body.id);
        await projeto.save(req.body);
        if(!projeto){
            return res.status(400).json({
                Error:['Não foi possivel editar o projeto']
            })
        }
        return res.status(200).json(projeto)
    }


}