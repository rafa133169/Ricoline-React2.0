import React, { useState, useEffect } from 'react';
import Footer from '../Components/Footer'
import Header from '../components/Header'

import axios from 'axios';
import Menu_producto from '../part-1/Menu_producto';
import PerfilUsuario from '../part-1/PerfilUsuario';



function Home() {

    const [Users, setCatalogs] = useState([]);

    useEffect(() => {
        // Lógica para obtener los usuarios de la base de datos al cargar el componente
        fetchUsers();
      }, []);
    
      const fetchUsers = async () => {
       
          const response = await axios.get('http://localhost:3000/users'); // Ruta de la API para obtener catálogos
      
        
          console.log(response.data);
       
      }
    
    return (
        <>  
        <Header></Header>
        <div>
                {/*<Menu_producto></Menu_producto>*/} 
                {/*<PerfilUsuario></PerfilUsuario>*/}
            </div>
            <Footer></Footer>

        </>
    )
}

export default Home
