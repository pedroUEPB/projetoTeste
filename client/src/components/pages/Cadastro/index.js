import { Formik, Field, ErrorMessage } from 'formik';
import React from 'react';
import MaskedInput from 'react-text-mask';
import cepMask from './cepMask';
import cpfNumberMask from './cpfMask';
import matriculaMask from './matriculaMask';
import '../../../style.css';
import axios from 'axios';

const dadosEnvio = {
    cep: '58433-553',
    endereco: 'Rua Severino Matias da Silva',
    bairro: 'Malvinas',
    cidade: 'Campina Grande',
    numero: '12',
    complemento: 'asd',
    uf: 'PB'
}

const Cadastro = () => {
    const validateNome = (value) => {
        let error;
        if (!value) {
            error = "Nome é obrigatório!";
        }
        return error;
    }

    const validateIdade = (value) => {
        let error;
        if (!value) {
            error = "Idade é obrigatória!";
        }
        if (parseInt(value) < 17) {
            error = "Precisa ser maior que 16 anos!"
        }
        return error;
    }

    const validateCPF = (value) => {
        let error;
        if (!value) {
            error = "CPF é obrigatório!";
        }
        return error;
    }

    const validateMatricula = (value) => {
        let error;
        if (!value) {
            error = "Matricula é obrigatória!";
        }
        return error;
    }

    const validateCurso = (value) => {
        let error;
        if (!value) {
            error = "Curso é obrigatório!";
        }
        return error;
    }

    const validateCep = (value) => {
        let error;
        if (!value) {
            error = "CEP é obrigatório!";
        }
        return error;
    }

    const validateEndereco = (value) => {
        let error;
        if (!value) {
            error = "Endereço é obrigatório!";
        }
        return error;
    }

    const validateBairro = (value) => {
        let error;
        if (!value) {
            error = "Bairro é obrigatório!";
        }
        return error;
    }

    const validateCidade = (value) => {
        let error;
        if (!value) {
            error = "Cidade é obrigatória!";
        }
        return error;
    }

    const onBlurCep = (e, setFieldValue) => {
        const { value } = e.target;
        const cep = value?.replace(/[^0-9]/g, '');

        if (cep?.length !== 8) {
            return;
        }

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((res) => res.json())
            .then((data) => {
                setFieldValue('bairro', data.bairro);
                setFieldValue('cidade', data.localidade);
                setFieldValue('endereco', data.logradouro);
                setFieldValue('uf', data.uf);
            })

    }

    const handleSubmitting = async (values, { setSubmitting }) => {
        try{
            const dados = await axios({
                url: "http://localhost:3001/cadastrar",
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                data:JSON.stringify(dadosEnvio)
            })
            console.log(dados.config.data, dados.data);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Formik initialValues={{
            nome: '',
            idade: '',
            cpf: '',
            matricula: '',
            curso: '',
            endereco: '',
            numero: '',
            complemento: '',
            bairro: '',
            cidade: '',
            uf: '',
            cep: ''
        }} onSubmit={handleSubmitting} render={({ handleChange, handleBlur, handleSubmit, isSubmitting, setFieldValue }) => (
            <form onSubmit={handleSubmit}>
                <div className="wrapper">
                    <div className="reg-form" onSubmit={handleSubmit}>
                        <div className="register-fields">
                            <Field type="text" className="input" name="nome" placeholder="Nome completo*" autoComplete="off"
                                validate={validateNome}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            <div className="error-message">
                                <ErrorMessage name="nome" />
                            </div>

                            <Field type="number" className="input" name="idade" placeholder="Idade*" autoComplete="off"
                                validate={validateIdade}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            <div className="error-message">
                                <ErrorMessage name="idade" />
                            </div>

                            <Field type="number" name="cpf"
                                validate={validateCPF}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                render={({ field }) => (
                                    <MaskedInput {...field}
                                        mask={cpfNumberMask}
                                        className="input"
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
                                        placeholder="Matricula*"
                                        autoComplete="off"
                                        validate={validateMatricula}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                    />
                                )}

                            />
                            <div className="error-message">
                                <ErrorMessage name="matricula" className="error-message" />
                            </div>
                            
                            <Field type="text" className="input" name="curso" placeholder="Curso*" autoComplete="off"
                                validate={validateCurso}
                                onBlur={handleBlur}
                                onChange={handleChange}
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
                                        onChange={handleChange}
                                        className="input"
                                        placeholder="CEP*"
                                        autoComplete="off"
                                    />
                                )}
                            />
                            <div className="error-message">
                                <ErrorMessage name="cep" />
                            </div>

                            <Field type="text" className="input" name="endereco" placeholder="Endereço*" autoComplete="off"
                                validate={validateEndereco}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            <div className="error-message">
                                <ErrorMessage name="endereco" />
                            </div>

                            <Field type="text" className="input" name="bairro" placeholder="Bairro*" autoComplete="off"
                                validate={validateBairro}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            <div className="error-message">
                                <ErrorMessage name="bairro" />
                            </div>

                            <Field type="text" className="input" name="cidade" placeholder="Cidade*" autoComplete="off"
                                validate={validateCidade}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            <div className="error-message">
                                <ErrorMessage name="cidade" />
                            </div>

                            <input type="text" className="input" name="numero" placeholder="Número" autoComplete="off" onChange={handleChange} />
                            <input type="text" className="input" name="complemento" placeholder="Complemento" autoComplete="off" onChange={handleChange} />
                            
                            <div className="select">
                                <Field component="select" className="   " name="uf">
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
                        </div>
                        <input type="submit" className="btn" value="Cadastrar" disable={isSubmitting} />
                    </div>
                </div>
            </form>
        )} />
    );
}

export default Cadastro;