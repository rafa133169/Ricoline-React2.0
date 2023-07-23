import React from 'react'
import '../css/categorias.css'
import prod1 from '../img-cat/prod1.jpeg'

export default function Cards({Imagen, Nombre, Precio}){
    return(
        <div>
      <div className='card' id='sdf'>
        <div className='grid grid-cols-3 gap-4'>
      <img src={prod1} class="card-img-top" alt="..."  />
      <div class="card-body">
      <h3 style={{fontSize:'15px', position:''}}>{Nombre}</h3>
      <div class="cat-pr-ca">
      <p class="card-text"
			style={{color: 'rgb(102, 88, 88)', marginright: '50px', marginleft: '40px'}}>{Precio}
		</p>
      </div><a href="">Details</a>
      </div>
      </div>
      </div>
    </div>
    )
}