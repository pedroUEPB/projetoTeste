import React from 'react';
import axios from 'axios';
import { Formik, Field, ErrorMessage } from 'formik';

const CadProjeto = () => {

    const validateTitulo = (value) => {
        let error;
        if (!value) {
            error = "Titulo é obrigatório!";
        }
        return error;
    }

    const validateResumo = (value) => {
        let error;
        if (!value) {
            error = "Resumo é obrigatório!";
        }
        return error;
    }

    const handleSubmitting = (values, { setSubmitting }) => {
        setTimeout(() => {
            //console.info(JSON.stringify(values, null, 12));
            axios.post("https://demo3943303.mockable.io/registrar")
            .then(function (response) {
                //console.log(response)
                alert(response.data.msg);
            }).catch(function (err) {
                console.log(err)
            })
            setSubmitting(false);
        }, 400);
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
            <form>
                <div className="wrapper">
                    <div className="reg-form" onSubmit={handleSubmit}>
                        <div>
                            <h1 className="text">
                                Projeto
                            </h1>
                        </div>
                        <div className="register-fields">
                            <Field type="text" className="input" name="titulo_do_projeto" placeholder="Titulo*" autoComplete="off"
                                validate={validateTitulo}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            <div className="error-message">
                                <ErrorMessage name="titulo_do_projeto" />
                            </div>

                            <Field type="text" className="input" name="resumo" placeholder="Resumo*" autoComplete="off"
                                validate={validateResumo}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            <div className="error-message">
                                <ErrorMessage name="resumo" />
                            </div>

                            <Field type="text" className="input" name="area_do_projeto" placeholder="Area do Projeto" autoComplete="off"
                                onChange={handleChange}
                            />

                            <Field type="text" className="input" name="chave1" placeholder="Palavra Chave" autoComplete="off"
                                onChange={handleChange}
                            />

                            <Field type="text" className="input" name="chave2" placeholder="Palavra Chave" autoComplete="off"
                                onChange={handleChange}
                            />

                            <Field type="text" className="input" name="chave3" placeholder="Palavra Chave" autoComplete="off"
                                onChange={handleChange}
                            />

                            <Field type="text" className="input" name="url" placeholder="Url do documento" autoComplete="off"
                                onChange={handleChange}
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