import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavDash from '../Pages-Dash/NavDash';
import Form from 'react-bootstrap/Form';
import { Formik } from 'formik';

function AddUser() {
  return (
    <>
      <NavDash />
      <Formik
        initialValues={{
          categoria: ""

        }}
        // VER LOS VALORES QUE AGREGA EL USUARIO
        onSubmit={async(values, actions) => { 
            console.log(values)
            
            var res =await axios.post('http://localhost:3001/Categorias', values)
        

              actions.resetForm()
              alert('Datos agregados correctamente')
              window.location = '/IndexCategorias'; 

              

          
          
             
        }}
        >
        {({handleChange, handleSubmit, values}) => (

          <div className='container mx-15 w-50  p-20'>
            <h2 className="font-black text-3lx text-center">Agregar categoria</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>nombre de categoria</Form.Label>
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

export default AddUser