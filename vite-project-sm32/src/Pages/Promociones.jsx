import React from 'react'
import Header from '../components/Header'
import Footer from '../Components/Footer';

import '../css/categorias.css';
import '../css/estilos.css'
import '../css/inicio.css';
import paquete5 from '../imagen/paquete5.png'
import paquete6 from '../imagen/paquete6.png'
import paquete7 from '../imagen/paquete7.png'
import prod1 from '../img-cat/prod1.jpeg'
import prod2 from '../img-cat/prod2.jpg'
import prod3 from '../img-cat/prod3.webp'
import prod4 from '../img-cat/prod4.webp'
import prod5 from '../img-cat/prod5.webp'
import prod6 from '../img-cat/prod6.webp'
import prod7 from '../img-cat/prod7.jpg'

function Promociones() {
  return (
    <div >
        <Header></Header>
        <div style={{margin:'50px'}}>
      <div className="cat-pri">
      <div className="cat-nom">
      <h1>Promociones</h1>
      <p style={{marginBottom: '30px', fontWeight: 'bold'}}>___________________________</p>
      <div className='cat-filtro'>
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
						aria-expanded="false"
						style={{marginLeft: '800px', marginTop: '130px', backgroundColor: 'rgb(218, 199, 170, 70%)', paddingTop: '5px', paddingLeft: '20px', paddingRight: '20px', paddingBottom: '5px', borderRadius: '30px', color: 'rgb(102, 88, 88)', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Ordenar por:</a>
                <ul class="dropdown-menu">
                    <li>
                        <a class="dropdown-item" href="#scrollspyHeading3">Nuevos</a>
                    </li>
                    <li>
					    <a class="dropdown-item" href="#scrollspyHeading4">populares</a>
					</li>
                    <li>
						<a class="dropdown-item" href="#scrollspyHeading4">Más vendidos</a>
					</li>
                    <li>
						<a class="dropdown-item" href="#scrollspyHeading5">Alfabeticamente: A-Z</a>
					</li>
                    <li>
					    <a class="dropdown-item" href="#scrollspyHeading5">Alfabeticamente: Z-A</a>
					</li>
                    <li>
						<a class="dropdown-item" href="#scrollspyHeading5">Precio: Menor-Mayor</a>
					</li>
                    <li>
						<a class="dropdown-item" href="#scrollspyHeading5">Precio: Mayor-Menor</a>
					</li>
                </ul>
            </div>
      </div>
      
      </div>
      <div className="cat-prod" >
      <div className='flex-tol'>
      <div className='grid grid-cols-2 gap-5' style={{marginLeft:'100px'}}>
      <div className="card">
  <img src={prod1}/>
  <div className="card-body">
    <h5 className="card-title">Bubulubu 24pz</h5>
    <p className="card-text">$137.99</p>
    <a href="#" className="btn btn-primary">Detalles</a>
  </div>
</div>
     
<div className="card">
  <img src={prod2}/>
  <div className="card-body">
    <h5 className="card-title">Bubulubu 24pz</h5>
    <p className="card-text">$137.99</p>
    <a href="#" className="btn btn-primary">Detalles</a>
  </div>
</div>
      </div>
      <div className='grid grid-cols-2 gap-5' style={{marginLeft:'100px'}}>
      <div className="card">
  <img src={prod3}/>
  <div className="card-body">
    <h5 className="card-title">Bubulubu 24pz</h5>
    <p className="card-text">$137.99</p>
    <a href="#" className="btn btn-primary">Detalles</a>
  </div>
</div>

<div className="card">
  <img src={prod4}/>
  <div className="card-body">
    <h5 className="card-title">Bubulubu 24pz</h5>
    <p className="card-text">$137.99</p>
    <a href="#" className="btn btn-primary">Detalles</a>
  </div>
</div>
      </div>
      </div>
      </div>
      <div>
      <p class="espacio-vertical"></p>
		<img class="Image150" style={{width: '921px', height: '341px', borderRadius: '38px', marginTop:'60px'}} src={paquete5} />
		<p class="espacio-vertical"></p>
		<div class="containerPromociones">
			<img class="Image149" style={{width: '368px', height: '385px', borderRadius: '60px', marginTop:'60px'}} src={paquete6} />
			<img class="Image147" style={{width: '368px', height: '385px', borderRadius: '60px', marginTop:'60px'}} src={paquete7} />
		  </div>
		  
		  <p class="espacio-vertical"></p>
          </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Promociones
