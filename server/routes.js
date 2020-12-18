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
const LoginController = require('./src/Controllers/LoginController');

const route = express.Router();

//Cadastro Alunos
route.post('/cadastroprojeto', CadastroAlunoController.store);
//route.get('/cadastroprojeto', CadastroAlunoController.index);
route.put('/cadastroprojeto', CadastroAlunoController.change);
route.delete('/cadastroprojeto', CadastroAlunoController.delete);

//Professores
route.post('/professor', PessoasController.storeProfessor);
route.post('/dadosprofessor', ProfessorController.index);
route.post('/verificarloginp', LoginController.indexLoginProfessor)
route.put('/professor', PessoasController.changeProfessor);
route.delete('/professor', PessoasController.deleteProfessor);

//Alunos
route.post('/aluno', PessoasController.storeAluno);
route.get('/aluno', AlunoController.index);
route.post('/verificarlogina', LoginController.indexLoginAluno);
route.put('/aluno', PessoasController.changeAluno);
route.delete('/aluno', PessoasController.deleteAluno);

//login
route.post('/logarprofessor', ProfessorController.login);
route.post('/logaraluno', AlunoController.login);

//Projeto
route.post('/projeto', ProjetoController.store);
route.get('/projeto', ProjetoController.index);
route.post('/projetoid', ProjetoController.indexOne);
route.post('/projetosprofessor', ProjetoController.indexProfessor);
route.delete('/projeto', ProjetoController.delete);
route.put('/projeto', ProjetoController.change);




module.exports = route