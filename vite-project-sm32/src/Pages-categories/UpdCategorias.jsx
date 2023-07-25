import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavDash from '../Pages-Dash/NavDash';
import Form from 'react-bootstrap/Form';
import { Formik } from 'formik';
import {useParams,redirect} from 'react-router-dom'; //Obtiene el Id de la ruta


export default function UpdUser() {

    const params = useParams()
    // console.log('Este es un parametro '+ params.id)
    console.log(params)
    var id_categoria = params.id;
    console.log(id_categoria)

    const[Categorias, SetCategoria]= useState({
        Categoria: "",

    })

    useEffect(()=>{

        const loadCategoria = async()=> {
            const response = await axios.get(`http://localhost:3001/Categorias/${id_categoria}`) 
            console.log(response);
            SetCategoria({
                categoria: response.data.categoria,

            })
        };
        loadCategoria(); //Ejecutar el método buscar usuario
    },[]);




    return (
        <>
            <NavDash />

            <Formik
                initialValues={Categorias} //Una vez buscado los datos lo va mapear de forma automatica
                enableReinitialize= {true}
                onSubmit={async (values, actions) => {
                    console.log(values)

                   var res = await axios.put(`http://localhost:3001/Categorias/${id_categoria}`, values)
                    actions.resetForm()
                    // alert('Datos actualizados correctamente')
                    if(res.status ==200 )
                    {
                        //Redirecciomar 
                        window.location = '/IndexCategorias'; 
                  
                     
                    }
                    else
                    {
                        alert("Succedio un error")    
                    }

                  
               
              


                }}
            >
                {({ handleChange, handleSubmit, values }) => (

                    <div className='container mx-15 w-50  p-20'>
            <h2 className="font-black text-3lx text-center">Actualizar categoria</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Categorias</Form.Label>
                <Form.Control type="text" name="categoria"
                onChange={handleChange}
                value={values.categoria} />
              </Form.Group>

           
             
            
 <button type='onSubmit' className='btn btn-success'>Guardar</button>
 </Form>

                    </div>

                )}
            </Formik>

        </>
    )
}

