const { Router } = require('express');
const express = require('express');

const CadastroAlunoController = require('./src/Controllers/CadastroAlunoController');
//const express = require('express');
const PessoaController = require('./src/controllers/PessoaController');
const UserControler = require('./src/Controllers/UserControler');
const PessoasController = require('./src/Controllers/PessoasController');
const ProfessorController = require('./src/Controllers/ProfessorController');
const AlunoController = require('./src/Controllers/AlunoController');
const ProjetoController = require('./src/Controllers/ProjetoController')

const route = express.Router();

//Cadastro Alunos
route.post('/cadastroprojeto', CadastroAlunoController.store);
route.get('/cadastroprojeto', CadastroAlunoController.index);
route.delete('/cadastroprojeto', CadastroAlunoController.delete);


//User
route.post('/users', UserControler.store)
route.get('/users', UserControler.index)

//ALunos e Professores
route.post('/cadastroprofessor', PessoasController.storeProfessor);
route.post('/cadastroaluno', PessoasController.storeAluno);
route.get('/pessoas', PessoasController.index)

//login
route.post('/logarprofessor', ProfessorController.login);
route.post('/logaraluno', AlunoController.login);

//Projeto
route.post('/cadastrarprojeto', ProjetoController.store);
route.get('/projetosprofessor', ProjetoController.indexProfessor);
route.delete('/deletarprojeto', ProjetoController.delete);
route.put('/updateprojeto', ProjetoController.change);




module.exports = route