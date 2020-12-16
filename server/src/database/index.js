const {Sequelize} = require('sequelize');
const dbconfig = require('../config/database');

const User = require('../models/ModelUser');
const CadastroAluno = require('../models/ModelCadastroAluno');
const Professor = require('../models/ModelProfessor');
const Pessoa = require('../models/ModelPessoa');
const Aluno = require('../models/ModelAluno');
const connection = new Sequelize(dbconfig);

const models = [Professor, User, Pessoa, Aluno]


models.forEach(models=>models.Init(connection))
Pessoa.associate(Professor)
Professor.associate(Pessoa)
Aluno.associate(Pessoa);




