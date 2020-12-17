import React, { useEffect, useState } from 'react';
import axios from 'axios';

const initialStatePessoa = {
    idP: '',
    nome: '',
    idade: '',
    cpf: '',
    cep: '',
    endereco: '',
    bairro: '',
    cidade: '',
    numero: '',
    complemento: '',
    uf: ''
}
const initialStateUser = {
    idU: '',
    matricula: '',
    curso: '',
    usuario: '',
    senha: ''
}



const MeusDados = () =>{
    const [dadosUser, setDadosUser] = useState(initialStateUser);
    const [dadosPessoa, setDadosPessoa] = useState(initialStatePessoa);
    const [recebido, setRecebido] = useState(false);

    useEffect(async () => {
        const { id, fk_pessoa} = JSON.parse(localStorage.getItem("token-user"));
        if(localStorage.getItem("token-user")){
            setDadosUser({
                ...dadosUser,
                idU: id
            })
            setDadosPessoa({
                ...dadosPessoa,
                idP: fk_pessoa
            })
        }
        console.log(id)
        console.log(fk_pessoa)
        console.log(dadosUser.idU)
        console.log(dadosPessoa.idP)
        const dados = await axios({
            url: 'http://localhost:3001/dadosprofessor',
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            data:JSON.stringify({idU: id})
        })

        console.log(dados.data);
        if(dados){
            setDadosUser(dados.data.user);
            setDadosPessoa(dados.data.pessoa);
            console.log(dadosUser)
            console.log(dadosPessoa)
            setRecebido(true);
        }else {
            console.log("erro")
        }
    }, [])

    return (
        <div className="wrapper-dadosU">
            {recebido && <div className="reg-form">
                <label className="text">Nome:</label>
                <br/>
                <h3 className="text">{dadosPessoa.nome}</h3>
                <label className="text">Matricula:</label>
                <br/>
                <h3 className="text">{dadosUser.matricula}</h3>
                <label className="text">Curso:</label>
                <br/>
                <h3 className="text">{dadosUser.curso}</h3>
            </div>}
            {recebido && <div className="reg-form-dadosU">
                <label className="text">Idade:</label>
                <h3 className="text">{dadosPessoa.idade}</h3>
                <label className="text">CPF:</label>
                <h3 className="text">{dadosPessoa.cpf}</h3>
                <label className="text">CEP:</label>
                <h3 className="text">{dadosPessoa.cep}</h3>
                <label className="text">Endereço:</label>
                <h3 className="text">{dadosPessoa.endereco}</h3>
                <label className="text">Bairro:</label>
                <h3 className="text">{dadosPessoa.bairro}</h3>
                <label className="text">Cidade:</label>
                <h3 className="text">{dadosPessoa.cidade}</h3>
                <label className="text">Número:</label>
                <h3 className="text">{dadosPessoa.numero}</h3>
                <label className="text">Complemento:</label>
                <h3 className="text">{dadosPessoa.complemento}</h3>
                <label className="text">Uf:</label>
                <h3 className="text">{dadosPessoa.uf}</h3>
                <label className="text">Usuario:</label>
                <h3 className="text">{dadosUser.usuario}</h3>
                <button className="btn">Editar Dados</button>
                <button className="btn">Excluir Conta</button>
            </div>}
        </div>
    );
}

export default MeusDados;