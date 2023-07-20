import React from 'react'
import '../css/estilos.css';
import paleta from '../imagen/paleta.jpg';
import producto9 from '../imagen/producto9.jpg';
import producto10 from '../imagen/producto10.jpg';


function Menu_producto() {
  return (
    <div>
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
            <button className="buy-1">Comprar ahora</button>
            <p>Lorem Ipsum is sim recently with desktop publish versions of Lorem Ipsum.</p>
			<a>Cantidad
			</a><a href="#" className="button1">-</a> <a>1</a><a href="#" className="button1">+</a>
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
      




  


    </div>
  )
}

export default Menu_producto
