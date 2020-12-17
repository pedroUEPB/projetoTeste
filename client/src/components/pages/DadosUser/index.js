import React, { useEffect, useState } from 'react';
import axios from 'axios';

const initialStatePessoa = {
    idP: JSON.parse(localStorage.getItem('token-user').id),
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
    idU: JSON.parse(localStorage.getItem('token-user').fk_pessoa),
    matricula: '',
    curso: '',
    usuario: '',
    senha: ''
}



const MeusDados = () =>{
    const [dadosUser, setDadosUser] = useState(initialStateUser);
    const [dadosPessoa, setDadosPessoa] = useState(initialStatePessoa);

    useEffect(() => {
        const dt = async () =>{
            const dados = await axios({
                url: 'http://localhost:3001/professor',
                method: 'GET',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                data:JSON.stringify({idU: dadosUser.idU, idP: dadosPessoa.idP})
            })
        }
    }, [])

    return (
        <div className="wrapper-dadosU">
            <div className="reg-form">
                <label className="text">Nome:</label>
                <br/>
                <h3 className="text">{dadosPessoa.nome}</h3>
                <label className="text">Matricula:</label>
                <br/>
                <h3 className="text">{dadosUser.matricula}</h3>
                <label className="text">Curso:</label>
                <br/>
                <h3 className="text">{dadosUser.curso}</h3>
            </div>
            <div className="reg-form-dadosU">
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
            </div>
        </div>
    );
}

export default MeusDados;