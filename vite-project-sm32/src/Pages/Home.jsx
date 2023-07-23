import React, { useState, useEffect } from 'react';
import Footer from '../Components/Footer'
import Header from '../components/Header'
import Index from '../Pages/Index';
import axios from 'axios';




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
       
              <Index></Index>
         
            <Footer></Footer>

        </>
    )
}

export default Home
