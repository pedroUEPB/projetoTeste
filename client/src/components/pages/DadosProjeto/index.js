import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory} from 'react-router-dom';

const initState = {
    id: 0,
    titulo_do_projeto: '',
    /*professor: {
        pessoa: {nome: ''},
        id: 0,
    },*/
    fk_professor: 0,
    area_do_projeto: '',
    resumo: '',
    palavra_chave1: '',
    palavra_chave2: '',
    palavra_chave3: '',
    url_documento: ''
}

const DadosProjeto = () => {
    const [projeto, setProjeto] = useState(initState);
    const [isDono, setDono] = useState(false);
    const history = useHistory();
    
    useEffect(async () => {
        const id = JSON.parse(localStorage.getItem("idTable"))
        //console.log(id);
        try{
            const dados = await Axios({
                url: 'http://localhost:3001/projetoid',
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                data:JSON.stringify({id: id})
            })
            //if(dados.data.fk_professor = )
            const idP= JSON.parse(localStorage.getItem('token-user')).id
            console.log(idP)
            setProjeto(dados.data)
            console.log(projeto)
            if(idP === dados.data.fk_professor){
                setDono(true);
                console.log("entrou")
            }
        } catch(err){
            console.log(err)
        }   
    }, [])

    const deleteProjeto = async () => {
        try{
            const dados = await Axios({
                url: 'http://localhost:3001/projeto',
                method: 'DELETE',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                data:JSON.stringify({id: projeto.id})
            })
            if(dados){
                alert("PROJETO DELETADO");
                history.push('/Home');
            }
        } catch (err) {
            console.log(err)
        }
    }

    const notImplemented = () => {
        console.log("This function has not implemented, my bad!")
    }

    return(
        <form>
            <div className="wrapper">
                <div className="reg-form">
                    <div>
                        <label className="text">Titulo: {projeto.titulo_do_projeto}</label>
                        <br/>
                        
                        <label className="text">Área: {projeto.area_do_projeto}</label>
                        <br/>
                        <label className="text">Resumo: {projeto.resumo}</label>
                        <br/>
                        <label className="text">Palavra chave: {projeto.palavra_chave1}</label>
                        <br/>
                        <label className="text">Palavra chave: {projeto.palavra_chave2}</label>
                        <br/>
                        <label className="text">Palavra chave: {projeto.palavra_chave3}</label>
                        <br/>
                        <label className="text">Url do documento: {projeto.url_documento}</label>
                    </div>
                    {isDono && <button className="btn" onClick={notImplemented}>Adicionar aluno</button>}
                    {isDono && <button className="btn" onClick={deleteProjeto}>Ecluir Projeto</button>}
                </div>
            </div>
        </form>
    );
}

export default DadosProjeto;