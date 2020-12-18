import React, {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const initState = [{
    id: '',
    titulo_do_projeto: '',
    area_do_projeto: '',
    url_do_projeto: '',
    nomeProfessor: ''
}]

const ListaProjetos = () => {
    
    const [projetos, setProjetos] = useState(false);
    //const [dadosLogin, setDadosLogin] = useState(false);
    //const [validaLogin, setValidaLogin] = useState(false)
    const history = useHistory();
    //const [isProjetos, setIsProjetos] = useState(false);
    
    useEffect(async () =>{
        var url;
        if(localStorage.getItem('tipoUser') === "Professor"){
            url = "http://localhost:3001/projetosprofessor"
        } else {
            url = "http://localhost:3001/projetosaluno"
        }
        const id = localStorage.getItem('token-user');
        try{
            console.log("entrando")
            const dados = await axios({
                url: url,
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                data:JSON.stringify({id: JSON.parse(id).id})
            })
            //console.log("saindo")
            //console.log(dados.data);
            setProjetos(dados.data)
            //console.log(projetos)
         } catch (err){
            console.log(err)
         }
         //console.log(projetos);
    },[])

    function isEmpty(obj) {
        for(var prop in obj) {
            if(obj.hasOwnProperty(prop))
                return false;
        }
    
        return true;
    }

    function verif(e){
        localStorage.setItem("idTable", e.target.id)
        //console.log(e.target.id)
        history.push('/dadosProjeto')
    }

    function cadastrar(){
        history.push('/cadastroProjeto')
    }

    return (
        <div className="wrapper">
            <div className="reg-form">
                <h1 className="text">Todos os Projetos</h1>
                {projetos &&
                <table className="content-table" name="projetos">
                    <thead>
                        <tr>
                            <th >Id</th>
                            <th>Titulo</th>
                            <th>Area</th>
                            <th>URL</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projetos.map((projeto, index) => (
                            <tr key={projeto.id} onClick={verif}>
                                <td>{projeto.id}</td>
                                <td>{projeto.titulo_do_projeto}</td>
                                <td>{projeto.area_do_projeto}</td>
                                <td>{projeto.url_documento}</td>
                                
                                <td id={projeto.id} onClick={verif}>Ver</td>
                            </tr>
                        ))}
                    </tbody>
                </table>}
                <button className="btn" onClick={cadastrar}>Criar Projeto</button>
            </div>
        </div>
    );
}

export default ListaProjetos;