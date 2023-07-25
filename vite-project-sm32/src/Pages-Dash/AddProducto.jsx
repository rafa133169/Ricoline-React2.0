import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavDash from './NavDash'
import Form from 'react-bootstrap/Form';
import { Formik } from 'formik';

function AddUser() {
  return (
    <>
      <NavDash />
      <Formik
        initialValues={{
          nombre: "",
          precio: "",
          id_categoria_id: "",
          imagen: ""

        }}
        // VER LOS VALORES QUE AGREGA EL USUARIO
        onSubmit={async(values, actions) => { 
            console.log(values)
            
            var res =await axios.post('http://localhost:3001/Productos', values)
        

              actions.resetForm()
              alert('Datos agregados correctamente')
              window.location = '/IndexProductos'; 

              

          
          
             
        }}
        >
        {({handleChange, handleSubmit, values}) => (

          <div className='container mx-15 w-50  p-20'>
            <h2 className="font-black text-3lx text-center">Agregar nuevo Producto</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
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

export default AddUser