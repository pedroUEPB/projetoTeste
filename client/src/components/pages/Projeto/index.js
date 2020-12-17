import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import { Formik, Field, ErrorMessage } from 'formik';

const initState = {
    titulo_do_projeto: '',
    resumo: '',
    area_do_projeto: '',
    palavra_chave1: '',
    palavra_chave2: '',
    palavra_chave3: '',
    url_documento: '',
    fk_professor: JSON.parse(localStorage.getItem('token-user')).id
}

const CadProjeto = () => {

    const [projeto, setProjeto] = useState(initState);
    const history = useHistory();

    const validateTitulo = () => {
        let error;
        if (!projeto.titulo_do_projeto) {
            error = "Titulo é obrigatório!";
        }
        return error;
    }

    const validateResumo = () => {
        let error;
        if (!projeto.resumo) {
            error = "Resumo é obrigatório!";
        }
        return error;
    }

    const onChangeProjeto = (e) => {
        setProjeto({
            ...projeto,
            [e.target.name]:e.target.value
        });
        //console.log(dadosEnvio);
    }

    const handleSubmitting = async (values, { setSubmitting }) => {
        console.log(projeto);
        const dados = await axios({
            url: "http://localhost:3001/projeto",
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            data:JSON.stringify({projeto})
        })
        if(dados){
            history.push('/home')
        }
    }

    return(
        <Formik initialValues ={{
            titulo_do_projeto: '', 
            fk_professor: '', 
            area_do_projeto: '', 
            resumo: '', 
            palavra_chave1: '', 
            palavra_chave2: '', 
            palavra_chave3: '', 
            url_documento: ''
        }} onSubmit={handleSubmitting} render={({ handleChange, handleBlur, handleSubmit, isSubmitting, setFieldValue }) => (
            <form onSubmit={handleSubmit}>
                <div className="wrapper">
                    <div className="reg-form">
                        <div>
                            <h1 className="text">
                                Projeto
                            </h1>
                        </div>
                        <div className="register-fields">
                            <Field type="text" className="input" value={projeto.titulo_do_projeto} name="titulo_do_projeto" placeholder="Titulo*" autoComplete="off"
                                validate={validateTitulo}
                                onBlur={handleBlur}
                                onChange={onChangeProjeto}
                            />
                            <div className="error-message">
                                <ErrorMessage name="titulo_do_projeto" />
                            </div>

                            <Field type="text" className="input" value={projeto.resumo} name="resumo" placeholder="Resumo*" autoComplete="off"
                                validate={validateResumo}
                                onBlur={handleBlur}
                                onChange={onChangeProjeto}
                            />
                            <div className="error-message">
                                <ErrorMessage name="resumo" />
                            </div>

                            <Field type="text" className="input" value={projeto.area_do_projeto} name="area_do_projeto" placeholder="Area do Projeto" autoComplete="off"
                                onChange={onChangeProjeto}
                            />

                            <Field type="text" className="input" value={projeto.palavra_chave1} name="palavra_chave1" placeholder="Palavra Chave" autoComplete="off"
                                onChange={onChangeProjeto}
                            />

                            <Field type="text" className="input" value={projeto.palavra_chave2} name="palavra_chave2" placeholder="Palavra Chave" autoComplete="off"
                                onChange={onChangeProjeto}
                            />

                            <Field type="text" className="input" value={projeto.palavra_chave3} name="palavra_chave3" placeholder="Palavra Chave" autoComplete="off"
                                onChange={onChangeProjeto}
                            />

                            <Field type="text" className="input" value={projeto.url_documento} name="url_documento" placeholder="Url do documento" autoComplete="off"
                                onChange={onChangeProjeto}
                            />
                        </div>
                        <input type="submit" className="btn" value="Cadastrar" disable={isSubmitting} />
                    </div>
                </div>
            </form>
        )}/>
    );
}

export default CadProjeto;