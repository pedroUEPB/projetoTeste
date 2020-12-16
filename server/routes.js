const { Router } = require('express');
const express = require('express');

const CadastroAlunoController = require('./src/Controllers/CadastroAlunoController');
//const express = require('express');
const PessoaController = require('./src/controllers/PessoaController');
const UserControler = require('./src/Controllers/UserControler');
const PessoasController = require('./src/Controllers/PessoasController');
const ProfessorController = require('./src/Controllers/ProfessorController');

const route = express.Router();

//Cadastro Alunos
route.post('/cadastro', CadastroAlunoController.store);
route.get('/cadastro', CadastroAlunoController.index);
route.delete('/deletAluno', )


//User
route.post('/users', UserControler.store)
route.get('/users', UserControler.index)

//ALunos e Professores
route.post('/cadastroprofessor', PessoasController.storeProfessor);
route.post('/cadastroaluno', PessoasController.storeAluno);
route.get('/pessoas', PessoasController.index)
//





module.exports = route