import { Formik, Field, ErrorMessage } from 'formik';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import MaskedInput from 'react-text-mask';
import cepMask from './cepMask';
import cpfNumberMask from './cpfMask';
import matriculaMask from './matriculaMask';
import '../../../style.css';
import axios from 'axios';

const initialStatePessoa = {
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
    matricula: '',
    curso: '',
    usuario: '',
    senha: ''
}

const Cadastro = () => {
    const [pessoa, setPessoa] = useState(initialStatePessoa);
    const [user, setUser] = useState(initialStateUser);
    const history = useHistory();

    const validateNome = () => {
        let error;
        if (!pessoa.nome) {
            error = "Nome é obrigatório!";
        }
        return error;
    }

    const validateIdade = () => {
        let error;
        if (!pessoa.idade) {
            error = "Idade é obrigatória!";
        }
        if (parseInt(pessoa.idade) < 17) {
            error = "Precisa ser maior que 16 anos!"
        }
        return error;
    }

    const validateCPF = () => {
        let error;
        if (!pessoa.cpf) {
            error = "CPF é obrigatório!";
        }
        return error;
    }

    const validateMatricula = () => {
        let error;
        if (!user.matricula) {
            error = "Matricula é obrigatória!";
        }
        return error;
    }

    const validateCurso = () => {
        let error;
        if (!user.curso) {
            error = "Curso é obrigatório!";
        }
        return error;
    }

    const validateCep = () => {
        let error;
        if (!pessoa.cep) {
            error = "CEP é obrigatório!";
        }
        return error;
    }

    const validateEndereco = () => {
        let error;
        if (!pessoa.endereco) {
            error = "Endereço é obrigatório!";
        }
        return error;
    }

    const validateBairro = () => {
        let error;
        if (!pessoa.bairro) {
            error = "Bairro é obrigatório!";
        }
        return error;
    }

    const validateCidade = () => {
        let error;
        if (!pessoa.cidade) {
            error = "Cidade é obrigatória!";
        }
        return error;
    }

    const validateUsuario = () => {
        let error;
        if (!user.usuario) {
            error = "Usuário é obrigatória!";
        }
        return error;
    }

    const validateSenha = () => {
        let error;
        if (!user.senha) {
            error = "Senha é obrigatória!";
        }
        return error;
    }

    const onChangePessoa = (e) => {
        setPessoa({
            ...pessoa,
            [e.target.name]:e.target.value
        });
        //console.log(dadosEnvio);
    }

    const onChangeUser = (e) => {
        setUser({
            ...user,
            [e.target.name]:e.target.value
        });
        //console.log(dadosEnvio);
    }

    const onBlurCep = (e, setFieldValue) => {
        const cep = e.target.value;

        if (cep?.length !== 9) {
            return;
        }

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((res) => res.json())
            .then((data) => {
                pessoa.bairro = data.bairro;
                pessoa.cidade = data.localidade;
                pessoa.endereco = data.logradouro;
                pessoa.uf = data.uf
                setFieldValue('bairro', data.bairro);
                setFieldValue('cidade', data.localidade);
                setFieldValue('endereco', data.logradouro);
                setFieldValue('uf', data.uf);
            })

    }

    const handleSubmitting = async (values, { setSubmitting }) => {
        //console.log(user)
        
        var url;
        if(localStorage.getItem('tipoUser') === "Professor"){
            url = "http://localhost:3001/verificarloginp"
        } else {
            url = "http://localhost:3001/verificarlogina"
        }
        const us = user.usuario;
        //console.log(us);
        const resp = await axios({
            url: url,
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            data:JSON.stringify({user: us})
        })
        console.log(resp.data)
        if(resp.data !== "opa"){
            if(localStorage.getItem('tipoUser') === "Professor"){
                url = "http://localhost:3001/professor"
            } else {
                url = "http://localhost:3001/aluno"
            }
            
            try{
                const dados = await axios({
                    url: url,
                    method: 'POST',
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    data:JSON.stringify({user, pessoa})
                })
                if(!dados){
                    alert("não cadastrado")
                } else {
                    localStorage.setItem("token-user", JSON.stringify({id: dados.data.al.id, fk_pessoa: dados.data.al.fk_pessoa, nome: dados.data.dadosPessoa.nome}))
                    history.push('/listaProjetos')
                }
                //console.log(dados.data.al.id, dados.data.al.fk_pessoa, dados.data.dadosPessoa.nome);
            } catch (err) {
                console.log(err);
            }
        } else{
            alert("USUÁRIO JÁ CADASTRADO")
        }
    }

    return (
        <Formik initialValues={{
            endereco: '',
            bairro: '',
            cidade: '',
            uf: ''
        }} onSubmit={handleSubmitting} render={({handleBlur, handleSubmit, isSubmitting, setFieldValue }) => (
            <form onSubmit={handleSubmit}>
                <div className="wrapper">
                    <div className="reg-form" onSubmit={handleSubmit}>
                        <div className="register-fields">
                            <Field type="text" className="input" value={pessoa.nome} name="nome" placeholder="Nome completo*" autoComplete="off"
                                validate={validateNome}
                                onBlur={handleBlur}
                                onChange={onChangePessoa}
                            />
                            <div className="error-message">
                                <ErrorMessage name="nome" />
                            </div>

                            <Field type="number" className="input" value={pessoa.idade} name="idade" placeholder="Idade*" autoComplete="off"
                                validate={validateIdade}
                                onBlur={handleBlur}
                                onChange={onChangePessoa}
                            />
                            <div className="error-message">
                                <ErrorMessage name="idade" />
                            </div>

                            <Field type="number" name="cpf"
                                validate={validateCPF}
                                render={({ field }) => (
                                    <MaskedInput {...field}
                                        onChange={onChangePessoa}
                                        onBlur={handleBlur}
                                        mask={cpfNumberMask}
                                        className="input"
                                        value={pessoa.cpf}
                                        placeholder="CPF*"
                                        autoComplete="off"

                                    />
                                )}
                            />
                            <div className="error-message">
                                <ErrorMessage name="cpf" />
                            </div>

                            <Field type="text" name="matricula"
                                validate={validateMatricula}
                                render={({ field }) => (
                                    <MaskedInput {...field}
                                        mask={matriculaMask}
                                        className="input"
                                        value={user.matricula}
                                        placeholder="Matricula*"
                                        autoComplete="off"
                                        validate={validateMatricula}
                                        onBlur={handleBlur}
                                        onChange={onChangeUser}
                                    />
                                )}

                            />
                            <div className="error-message">
                                <ErrorMessage name="matricula" className="error-message" />
                            </div>
                            
                            <Field type="text" className="input" value={user.curso} name="curso" placeholder="Curso*" autoComplete="off"
                                validate={validateCurso}
                                onBlur={handleBlur}
                                onChange={onChangeUser}
                            />
                            <div className="error-message">
                                <ErrorMessage name="curso" />
                            </div>

                            <Field type="number" name="cep"
                                validate={validateCep}
                                render={({ field }) => (
                                    <MaskedInput {...field}
                                        mask={cepMask}
                                        validate={validateCep}
                                        onBlur={(e) => onBlurCep(e, setFieldValue)}
                                        onChange={onChangePessoa}
                                        className="input"
                                        value={pessoa.cep}
                                        placeholder="CEP*"
                                        autoComplete="off"
                                    />
                                )}
                            />
                            <div className="error-message">
                                <ErrorMessage name="cep" />
                            </div>

                            <Field type="text" className="input" value={pessoa.endereco} name="endereco" placeholder="Endereço*" autoComplete="off"
                                validate={validateEndereco}
                                onBlur={handleBlur}
                                onChange={onChangePessoa}
                            />
                            <div className="error-message">
                                <ErrorMessage name="endereco" />
                            </div>

                            <Field type="text" className="input" value={pessoa.bairro} name="bairro" placeholder="Bairro*" autoComplete="off"
                                validate={validateBairro}
                                onBlur={handleBlur}
                                onChange={onChangePessoa}
                            />
                            <div className="error-message">
                                <ErrorMessage name="bairro" />
                            </div>

                            <Field type="text" className="input" value={pessoa.cidade} name="cidade" placeholder="Cidade*" autoComplete="off"
                                validate={validateCidade}
                                onBlur={handleBlur}
                                onChange={onChangePessoa}
                            />
                            <div className="error-message">
                                <ErrorMessage name="cidade" />
                            </div>

                            <input type="text" className="input" value={pessoa.numero} name="numero" placeholder="Número" autoComplete="off" onChange={onChangePessoa} />
                            <input type="text" className="input" value={pessoa.complemento} name="complemento" placeholder="Complemento" autoComplete="off" onChange={onChangePessoa} />
                            
                            <div className="select">
                                <Field component="select" className="   " value={pessoa.uf} name="uf" onChange={onChangePessoa}>
                                    <option value={"AC"}>AC</option>
                                    <option value={"AL"}>AL</option>
                                    <option value={"AP"}>AP</option>
                                    <option value={"AM"}>AM</option>
                                    <option value={"BA"}>BA</option>
                                    <option value={"CE"}>CE</option>
                                    <option value={"DF"}>DF</option>
                                    <option value={"ES"}>ES</option>
                                    <option value={"GO"}>GO</option>
                                    <option value={"MA"}>MA</option>
                                    <option value={"MT"}>MT</option>
                                    <option value={"MS"}>MS</option>
                                    <option value={"MG"}>MG</option>
                                    <option value={"PA"}>PA</option>
                                    <option value={"PB"}>PB</option>
                                    <option value={"PR"}>PR</option>
                                    <option value={"PE"}>PE</option>
                                    <option value={"PI"}>PI</option>
                                    <option value={"RJ"}>RJ</option>
                                    <option value={"RN"}>RN</option>
                                    <option value={"RS"}>RS</option>
                                    <option value={"RO"}>RO</option>
                                    <option value={"RR"}>RR</option>
                                    <option value={"SC"}>SC</option>
                                    <option value={"SP"}>SP</option>
                                    <option value={"SE"}>SE</option>
                                    <option value={"TO"}>TO</option>
                                </Field>
                            </div>
                            
                            <Field type="text" className="input" value={user.usuario} name="usuario" placeholder="Usuário*" autoComplete="off"
                                validate={validateUsuario}
                                onBlur={handleBlur}
                                onChange={onChangeUser}
                            />
                            <div className="error-message">
                                <ErrorMessage name="endereco" />
                            </div>

                            <Field type="password" className="input" value={user.senha} name="senha" placeholder="Senha*" autoComplete="off"
                                validate={validateSenha}
                                onBlur={handleBlur}
                                onChange={onChangeUser}
                            />
                            <div className="error-message">
                                <ErrorMessage name="endereco" />
                            </div>

                        </div>
                        <input type="submit" className="btn" value="Cadastrar" disable={isSubmitting} />
                    </div>
                </div>
            </form>
        )} />
    );
}

export default Cadastro;