module.exports = {
    async store(req, res){
        const { nome, idade, cpf, cep, endereco, bairro, cidade, numero, complemento, uf } = req.body

        const pessoa = await Pessoa.create({
            nome, idade, cpf, cep, endereco, bairro, cidade, numero, complemento, uf
        });

        return res.json(pessoa);
    }

    /*criar(req, res, next){
        const nome = req.body.nome;
        const idade = req.body.idade;
        const cpf = req.body.cpf;
        const cep = req.body.cep;
        const endereco = req.body.endereco;
        const bairro = req.body.bairro;
        const cidade = req.body.cidade;
        const numero = req.body.numero;
        const complemento = req.body.complemento;
        const uf = req.body.uf;
        const bd = db.query(
            "INSERT INTO pessoa(nome, idade, cpf, cep, endereco, bairro, cidade, numero, complemento, uf) \
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [nome, idade, cpf, cep, endereco, bairro, cidade, numero, complemento, uf],
            (err, result, fields) => {
                if(err){
                    console.log(err)
                } else {
                    next(res.status(200).json(result.insertId));
                }
            }
        );
        return res.status(200).json(bd);
    }*/
}