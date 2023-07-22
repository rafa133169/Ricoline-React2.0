import React, { useState, useEffect } from 'react';
import '../css/estilos.css';
import paleta from '../imagen/paleta.jpg';
import producto9 from '../imagen/producto9.jpg';
import producto10 from '../imagen/producto10.jpg';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../Components/Footer';




function Menu_producto() {
  const [preferenceId, setPreferenceId] = useState(null);
    initMercadoPago('TEST-16092f47-0609-4042-b7d0-a9e1a40a80f3'); //Poner la llaver PUBLIC_KEY


    // se realizara una peticion a la api que se creo de mercado pago
    const createPreference = async () => {
        try {
            const response = await axios.post("http://localhost:8080/create_preference", {
                title: "Paleta payaso 24 piezas",
                unit_price: 399,
                quantity: 1,
                // currency_id: "MXN"
            });
            console.log(response)
            const { id } = response.data;
            console.log(id)
            return id;
        } catch (error) {
            console.log(error)
        }


    }

    // de acuerdo a la respuesta que se obtiene como respuesta se almacena 
    const handleBuy = async (titledata, price) => {
        const id = await createPreference(titledata, price);
        if (id) {
          
            setPreferenceId(id);
        }
    }

  return (
    
    <div>
      <Header></Header>
    <div className="container">
        
        <img style={{
        display: 'inline-block',
        verticalAlign: 'middle',
        marginRight: '10px',
        width:'500px'
      }}
      src={paleta}
      />

        <div style={{
                display: 'inline-block',
                verticalAlign: 'middle'
        }}>
            <h3 className="font-bold text-2xl">Paleta payaso 24 piezas</h3> 
            <p>$399</p>
            <button className="buy-1" onClick={handleBuy}>Comprar ahora</button>{
              preferenceId && <Wallet initialization={{ preferenceId}} />
            }
            <p>Lorem Ipsum is sim recently with desktop publish versions of Lorem Ipsum.</p>
			{/*<a>Cantidad
			</a><a href="#" className="button1">-</a> <a>1</a><a href="#" className="button1">+</a>*/}
        </div>
       
        <div className="button-container">
            <img style={{
        width: '100px'
      }}
      src={producto9}
       />

            <img  style={{
      width: '100px'
      }}
      src={producto10}
       />
           
        
          </div>

          <h3 className="text-2xl">Comenata que te parecio</h3>
          <div className="mb-3">
            <label /*for="exampleFormControlInput1"*/ className="form-label">Nombre</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" />
          </div>
          <div className="mb-3">
            <label /*for="exampleFormControlTextarea1"*/ className="form-label">Comentario</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
          </div>
          <button className="form">Enviar</button>
      </div>
      




  
<Footer></Footer>

    </div>
  )
}

export default Menu_producto