import React from 'react';
import './styleAbout.css';

function About() {
    return(
        <div className="wrapper-about">
            <div className="reg-form-about">
                <h1 className="text">Sobre</h1>
            </div>
            <div>
                <h2 className="text">
                    Desenvolvido para controle de alunos em projetos.
                </h2>
                <p className="text-party">Equipe: João Paulo, Maria Vanessa e Pedro Henrique</p>
            </div>
        </div>
    );
}

export default About;