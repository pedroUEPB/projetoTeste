import React, { useEffect, useState }from 'react'
import axios from 'axios';

const Home = () => {
    const [projetos, setProjetos] = useState({});
    

    return(
        <div className="wrapper">
            <div className="reg-form">
                <h1 className="text">Meus Projetos</h1>
                <table>
                    
                </table>
            </div>
        </div>
    );
}

export default Home;