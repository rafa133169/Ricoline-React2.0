import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavDash from './NavDash'
import Form from 'react-bootstrap/Form';
import { Formik } from 'formik';
import {useParams,redirect} from 'react-router-dom'; //Obtiene el Id de la ruta


export default function UpdUser() {

    const params = useParams()
    // console.log('Este es un parametro '+ params.id)
    console.log(params)
    var id_producto = params.id;
    console.log(id_producto)

    const[Productos, SetProducto]= useState({
        nombre: "",
          precio: "",
          cantidad: "",
          id_categoria_id: "",
          imagen: ""
    })

    useEffect(()=>{

        const loadProducto = async()=> {
            const response = await axios.get(`http://localhost:3001/Productos/${id_producto}`) 
            console.log(response);
            SetProducto({
                nombre: response.data.nombre,
                precio:  response.data.precio,
                id_categoria_id:  response.data.id_categoria_id,
                imagen:  response.data.imagen
            })
        };
        loadProducto(); //Ejecutar el método buscar usuario
    },[]);




    return (
        <>
            <NavDash />

            <Formik
                initialValues={Productos} //Una vez buscado los datos lo va mapear de forma automatica
                enableReinitialize= {true}
                onSubmit={async (values, actions) => {
                    console.log(values)

                   var res = await axios.put(`http://localhost:3001/Productos/${id_producto}`, values)
                    actions.resetForm()
                    // alert('Datos actualizados correctamente')
                    if(res.status ==200 )
                    {
                        //Redirecciomar 
                        window.location = '/IndexProductos'; 
                  
                     
                    }
                    else
                    {
                        alert("Succedio un error")    
                    }

                  
               
              


                }}
            >
                {({ handleChange, handleSubmit, values }) => (

                    <div className='container mx-15 w-50  p-20'>
            <h2 className="font-black text-3lx text-center">Agregar nuevo usuario</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>ombre</Form.Label>
                <Form.Control type="text" name="nombre"
                onChange={handleChange}
                value={values.nombre} />
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label>precio</Form.Label>
                <Form.Control type="text" name="precio"
                onChange={handleChange} 
                value={values.precio}/>
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label>id_categoria_id</Form.Label>
                <Form.Control type="text" name="id_categoria_id"
                onChange={handleChange} 
                value={values.id_categoria_id}/>
              </Form.Group>
            

            <Form.Group className="mb-3" >
                <Form.Label>Imagen</Form.Label>
                <Form.Control type="text" name="imagen"
                onChange={handleChange} 
                value={values.imagen}/>
             
              </Form.Group>
 <button type='onSubmit' className='btn btn-success'>Guardar</button>
 </Form>

                    </div>

                )}
            </Formik>

        </>
    )
}
