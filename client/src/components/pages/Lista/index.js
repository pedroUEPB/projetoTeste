import React, {Component} from 'react';

class Lista extends Component{
    state={
        alunos:[]
    }

    
    render(){
        const {alunos} = this.state;
        return (
            <div className="wrapper-lista">
                <div className="reg-form-lista">
                    <h1 className="text">Lista</h1>
                </div>
                <div>
                    <table className="content-table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nome</th>
                                <th>Idade</th>
                                <th>Matricula</th>
                                <th>Curso</th>
                                <th>Endereço</th>
                                <th>Cidade</th>
                                <th>Bairro</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {alunos.map(aluno => (
                                <tr key = {aluno.id}>
                                    <td>{aluno.id}</td>
                                    <td>{aluno.nome}</td>
                                    <td>{aluno.age}</td>
                                    <td>{aluno.register}</td>
                                    <td>{aluno.course}</td>
                                    <td>{aluno.address}</td>
                                    <td>{aluno.city}</td>
                                    <td>{aluno.neighborhood}</td>
                                    <td>{aluno.state}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Lista;