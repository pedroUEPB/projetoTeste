const express = require('express')
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'projetotdig',
})

app.post('/cadastrar', async (req, res) => {
    const cep = req.body.cep;
    const endereco = req.body.endereco;
    const bairro = req.body.bairro;
    const cidade = req.body.cidade;
    const numero = req.body.numero;
    const complemento = req.body.complemento;
    const uf = req.body.uf;
    

    const bd = await db.query(
        "INSERT INTO endereco(cep, endereco, bairro, cidade, numero, complemento, uf) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [cep, endereco, bairro, cidade, numero, complemento, uf],
        (err, result, fields) => {
            if(err){
                console.log(err)
            } else {
                return res.status(200).json(result.insertId);
            }
        }

    );
    return res.status(200).json(bd);
});

app.post('/login', async(req, res) =>{
    const login = req.body.login;
    const senha = req.body.senha;
    const bd = await db.query(
        "SELECT professor.id, professor.usuario, professor.senha, professor.fk_professor, pessoa.id, pessoa.nome FROM professor WHERE professor.usuario = ? AND professor.fk_pessoa=pessoa.id",
        [login, senha],
        (err, result, fields) => {
            if(err){
                console.log(err)
            } else {
                return res.status(200).json(result);
            }
        }

    );
    return res.status(200).json(bd);
})

app.listen(3001, () => {
    console.log("connected!")
});

