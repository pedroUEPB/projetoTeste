import React, {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom';

const initialState = {
    email: 'demetrio@gmail.com',
    password: '123456'
}

const ListaProjetos = () => {
    
    const [projetos, setProjetos] = useState([]);
    const [dadosLogin, setDadosLogin] = useState(false);
    const [validaLogin, setValidaLogin] = useState(false)
    const history = useHistory();
    function Sair(){
        localStorage.removeItem("user")
        setValidaLogin(false)
    }


    useEffect(()=>{

        
        if(dadosLogin){
            
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
        /*eslint-disable */
    },[])

    useEffect(()=>{

        if(localStorage.getItem("user")){
            return setDadosLogin(localStorage.getItem("user"))
        } 
        return
        
    },[])

    return validaLogin&&(
        <div className="wrapper">
            <div className="reg-form">
                <h1 className="text">Todos os Projetos</h1>
                <table>
                    <thread>
                    <tr>
                        <th>Id</th>
                        <th>Titulo</th>
                        <th>Area</th>
                        <th>URL</th>
                        <th>Responsável</th>
                    </tr>
                    </thread>
                    <tbody>
                        {projetos.map(projeto => (
                            <tr key={projeto.id}>
                                <td>{projeto.id}</td>
                                <td>{projeto.titulo}</td>
                                <td>{projeto.area}</td>
                                <td>{projeto.url}</td>
                                <td>{projeto.nomeProfessor}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {validaLogin&&<button>Criar Projeto</button>}
                <br/>
                {validaLogin&&<button onClick={Sair}>Sair</button>}
            </div>
        </div>
    );
}

export default ListaProjetos;