const {Sequelize} = require('sequelize');
const dbconfig = require('../config/database');

const User = require('../models/ModelUser');
const CadastroAluno = require('../models/ModelCadAluno');
const Professor = require('../models/ModelProfessor');
const Pessoa = require('../models/ModelPessoa');
const Aluno = require('../models/ModelAluno');
const Projeto = require('../models/ModelProjeto');
const connection = new Sequelize(dbconfig);

const models = [Professor, User, Pessoa, Aluno, Projeto, CadastroAluno]


models.forEach(models=>models.Init(connection))
//Pessoa.associate(Professor)
Professor.associate(Pessoa)
/*Aluno.associate(Pessoa);
Projeto.associate(Professor);
CadastroAluno.associate(Projeto, Aluno);*/

Pessoa.associate(Professor);
Pessoa.associate(Aluno);
Professor.associate(Projeto);
Projeto.associate(Professor);
Projeto.associate(CadastroAluno);
Aluno.associate(CadastroAluno);




