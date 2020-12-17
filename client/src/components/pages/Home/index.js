import React, { useEffect, useState }from 'react'
import axios from 'axios';

const Home = () => {
    const [projetos, setProjetos] = useState({});
    
    useEffect(() =>{

    },[localStorage.getItem('token-user')])

    //lista de meus projetos
    const listaMP = async () => {
        var url;
        if(localStorage.getItem('tipoUser') === "Professor"){
            url = "http://localhost:3001/projetosprofessor"
        } else {
            url = "http://localhost:3001/projetosaluno"
        }
        const id = localStorage.getItem('token-user');
        try{
            const dados = await axios({
                url: url,
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                data:JSON.stringify({id: JSON.parse(id).id})
            })
            console.log(dados.data);
         } catch (err){
            console.log(err)
         }
     }

    return(
        <div>
            <div>
                {listaMP}
                <h1 className="text">Meus Projetos</h1>
                <table>
                    
                </table>
            </div>
        </div>
    );
}

export default Home;