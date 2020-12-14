import React from 'react';
import {history} from '../../history';
import './styleMain.css'

const Main = () => {

    const btn1 = () => {
        localStorage.setItem('tipoUser', "Professor");
        return (
            history.push('/login')
        )
    }

    const btn2 = () => {
        localStorage.setItem("tipoUser", "Aluno")
        return(
            history.push('/login')
        )
    }

    return(
        <div className="wrapper">
            <div className="reg-form">
                <h2 className="text">Logar como</h2>
                <button className="btnPr" onClick={btn1}>Professor</button>
                <button className="btnAl" onClick={btn2}>Aluno</button>
            </div>
        </div>
    );
}

export default Main;