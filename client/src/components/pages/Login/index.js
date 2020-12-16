import React, { useState } from 'react';

import { Formik, ErrorMessage } from 'formik';
import { useHistory } from 'react-router-dom';

const initialState = {
    email: '',
    password: ''

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
    

    function EnviaDados(){
        localStorage.setItem("user",JSON.stringify(dadosLogin))
        
        history.push('/listaprojetos')
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
                            <input onChange={onChange} value={dadosLogin.email} className="input" type="text" name="email" placeholder="Insira seu E-mail"/>
                            <div className="error-message">
                                <ErrorMessage name="login" />
                            </div>

                           
                            <div className="error-message">
                            <input  onChange={onChange} value={dadosLogin.password} className="input" type="password" name="password" placeholder="Insira sua senha"/>
                                <ErrorMessage name="password" />
                            </div>
                        </div>
                        <input type="submit" className="btn" value="Logar" onClick={EnviaDados} />
                        <input type="submit" className="btn" value="Cadastrar" onClick={toCadastro}/>
                    </div>
                </div>
            </form>
        )}/>
    );
}

export default Login;