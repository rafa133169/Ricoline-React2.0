import React from 'react'
import '../css/categorias.css'
import prod10 from '../img-cat/prod10.jpeg'
import { Link } from 'react-router-dom'

export default function Cards({Imagen, Nombre, Precio}){
    return(
        <div>
      <div className='card' id='sdf'>
        <div className='grid grid-cols-3 gap-4'>
      <img src={prod10} class="card-img-top" alt="..."  />
      <div class="card-body">
      <Link to='/Menu_producto' style={{fontSize:'15px', position:''}}>{Nombre}</Link>
      <div class="cat-pr-ca">
      <p class="card-text"
			style={{color: 'rgb(102, 88, 88)', marginright: '50px', marginleft: '40px'}}>{Precio}
		</p>
      </div><Link to="/Menu_producto">Details</Link>
      </div>
      </div>
      </div>
    </div>
    )
}