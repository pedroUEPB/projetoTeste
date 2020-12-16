import React, { useState } from 'react';

import { Formik, ErrorMessage } from 'formik';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

const initialState = {
    usuario: '',
    senha: ''

}

const Login = () => {

    const [dadosLogin, setLogin] = useState(initialState);
    const history = useHistory();
    
    const onChange = (e) => {
        setLogin({
            ...dadosLogin,
            [e.target.name]:e.target.value
        });
    }
    

    const logar = async () => {
        var url;
        if(localStorage.getItem('tipoUser') === "Professor"){
            url = "http://localhost:3001/logarprofessor"
        } else {
            console.log('entrou em aluno')
            url = "http://localhost:3001/logaraluno"
        }
        try{
            const dados = await Axios({
                url: url,
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                data:JSON.stringify({usuario: dadosLogin.usuario, senha: dadosLogin.senha})
            })
            if(!dados){
                alert("usuário ou senha incorretos")
            } else {
                localStorage.setItem("token-user",JSON.stringify(dados.data))
                history.push('/listaprojetos')
            }
            console.log(dados)
        } catch (err){

        }
        //localStorage.setItem("user",JSON.stringify(dadosLogin))
        
        //history.push('/listaprojetos')
    }
    
    const handleSubmitting = async (values, { setSubmitting }) => {
        
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

    function toCadastro(){
        history.push("/cadastro");
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
                            <input onChange={onChange} value={dadosLogin.usuario} className="input" type="text" name="usuario" placeholder="Insira seu E-mail"/>
                            <div className="error-message">
                                <ErrorMessage name="usuario" />
                            </div>

                           
                            <div className="error-message">
                            <input  onChange={onChange} value={dadosLogin.senha} className="input" type="password" name="senha" placeholder="Insira sua senha"/>
                                <ErrorMessage name="senha" />
                            </div>
                        </div>
                        <input type="submit" className="btn" value="Logar" onClick={logar} />
                        <input type="submit" className="btn" value="Cadastrar" onClick={toCadastro}/>
                    </div>
                </div>
            </form>
        )}/>
    );
}

export default Login;