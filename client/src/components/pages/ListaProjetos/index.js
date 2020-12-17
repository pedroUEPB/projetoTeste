import React, {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const ListaProjetos = () => {
    
    const [projetos, setProjetos] = useState([]);
    const [dadosLogin, setDadosLogin] = useState(false);
    //const [validaLogin, setValidaLogin] = useState(false)
    const history = useHistory();

    /*function Sair(){
        localStorage.removeItem("user")
        setValidaLogin(false)
    }*/

    async function preencherLista(){
        var dd
         const dados = await axios({
            url: "http://localhost:3001/projeto",
            method: 'GET'
        })
        if(dados){
            //dd = JSON.stringify(dados.data);
            console.log(dados.data)
            setProjetos(JSON.stringify(dados));
            //console.log(projetos);
        }
    }

    useEffect(()=>{
        /*if(dadosLogin){
            
            const dadosLoginObj = JSON.parse(dadosLogin)
            
            if(dadosLoginObj.email === initialState.email 
                &&
                dadosLoginObj.password === initialState.password
                ) {
                    setValidaLogin(true)
                }else{
                    history.push('/login')
                    alert("Email ou senha incorretos")
                }
        }
         */
        {preencherLista()}
        

    },[])

    const listar = () =>{
        return(
            projetos.map(projeto => (
                <tr key={projeto.id}>
                    <td>{projeto.id}</td>
                    <td>{projeto.titulo}</td>
                    <td>{projeto.area}</td>
                    <td>{projeto.url}</td>
                    <td>{projeto.nomeProfessor}</td>
                </tr>
            ))
        );
    }

    function cadastrar(){
        history.push('/cadastroProjeto')
    }

    return (
        <div className="wrapper">
            <div className="reg-form">
                <h1 className="text">Todos os Projetos</h1>
                <table className="content-table">
                    <thead>
                        <tr>
                            <th >Id</th>
                            <th>Titulo</th>
                            <th>Area</th>
                            <th>URL</th>
                            <th>Responsável</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
                <button className="btn" onClick={cadastrar}>Criar Projeto</button>
            </div>
        </div>
    );
}

export default ListaProjetos;