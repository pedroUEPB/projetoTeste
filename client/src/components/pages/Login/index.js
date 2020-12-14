import React, { useState } from 'react';
import axios from 'axios';
import { Formik, Field, ErrorMessage } from 'formik';

const dataGG = {
    login: 'demetrio',
    senha: 'demetrio',
    tipoUser:'professor'
}

const Login = () => {

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    const onChangeLogin = (e) => {
        setLogin(e.target.value);
    }
    
    const onChangeSenha = (e) => {
        setSenha(e.target.value);
    }

    const validateLogin = (value) => {
        let error;
        if (!value) {
            error = "Login é obrigatório!";
        }
        return error;
    }

    const validateSenha = (value) => {
        let error;
        if (!value) {
            error = "Senha é obrigatória!";
        }
        return error;
    }
    
    const handleSubmitting = async (values, { setSubmitting }) => {
        console.log(JSON.stringify(values));
        /*try {
            const dados = await axios({
                url: "http://localhost:3001/login",
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                data:JSON.stringify(dataGG)
            })
            if(dados.data) {
                localStorage.setItem('app-token', dados.config.data)
            }
            console.log(dados.config.data)
        } catch (err){
            console.log(err);
        }*/
    }

    return(
        <Formik initialValues = {{user: '', password: '', tipoUser: 'professor'/*props.tipoUser*/}} 
        onSubmit={handleSubmitting} render={({ handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
                <div className="wrapper">
                    <div className="reg-form" onSubmit={handleSubmit}>
                        <div>
                            <h1 className="text">
                                Login
                            </h1>
                        </div>
                        <div className="register-fields">
                            <Field type="text" className="input" name="login" placeholder="Login" autoComplete="off"
                                validate={validateLogin}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            <div className="error-message">
                                <ErrorMessage name="login" />
                            </div>

                            <Field type="password" className="input" name="password" placeholder="Senha" autoComplete="off"
                                validate={validateSenha}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            <div className="error-message">
                                <ErrorMessage name="password" />
                            </div>
                        </div>
                        <input type="submit" className="btn" value="Logar" disable={isSubmitting} />
                        <input type="submit" className="btn" value="Cadastrar"/>
                    </div>
                </div>
            </form>
        )}/>
    );
}

export default Login;