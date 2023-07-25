import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavDash from '../Pages-Dash/NavDash';
import { useNavigate } from 'react-router-dom';


function IndexUser() {
        
    const [Categorias, setCategorias] = useState([]);
    useEffect(() => {
        // Lógica para obtener los usuarios de la base de datos al cargar el componente
        fetchCategorias();
    }, []);

    const fetchCategorias = async () => {

        const response = await axios.get('http://localhost:3001/Categorias'); // Ruta de la API para obtener usuarios
        setCategorias(response.data);//Metiendo la respuesta(data) al estado 
        console.log('DAtos response ')
        console.log(response.data);
    }


// __________________________________________________
        // Funcion eliminar
// __________________________________________________

    const HandeDelte = async (id) => {

        const response = await axios.delete(`http://localhost:3000/Categorias/${id}` );

        if(response.status == 200){
                alert("Se borro correctamente")
        }else{
            alert("Succedio un error")
        }
        fetchCategorias()
    }

// --------------------------------------------------------
        //   Redireccionar mediante Id
        const navigate = useNavigate()

        //Productos
    

    return (
        <>
            <NavDash />
            

            <div className="container mx-10 w-100  p-20">
          
                <div className="row">
                   
                    <div className="offset-10 col-5 mb-5">

                        <a className="btn btn-success" href='/AddCategoria'> <i class="fa-solid fa-user" ></i>Nuevo</a>
                    </div>
                </div>
                <div className="offset-2 col-11 mb-5">
                    <div className="card border">
                        <div class="card-header bg-dark">
                            <h1 className="text-white"><strong>Lista de Categorias</strong></h1>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="tblArticulo" width="100%">
                                    <thead>
                                        <tr>
                                          
                                            <th> Categoria </th>
                                            <th> funciones </th>
                                          
                                        </tr>

                                    </thead>
                                    <tbody>

                                            {Categorias.map((categorias) => (
                                                <tr key={categorias.id_categorias}>
                                                    <td>{categorias.categoria} </td>
                                                   
                                                    <td>
                                                        <a className=" btn btn-warning mr-auto" onClick={()=> navigate(`/EditCategoria/${categorias.id_categoria}`)}> Editar</a>
                                                        {" "}
                                                        {/* <a class=" btn btn-danger mr-auto" onClick={() => console.log(users.PkUser)} > Eliminar</a> */}
                                                        <a className=" btn btn-danger mr-auto" onClick={() => HandeDelte(categorias.id_categoria)} > Eliminar</a>
                                                    </td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                        
                          
        </>
    )


}

export default IndexUser

