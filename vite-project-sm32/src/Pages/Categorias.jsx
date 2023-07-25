import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../Components/Footer';
import prod1 from '../img-cat/prod1.jpeg'
import prod2 from '../img-cat/prod2.jpg'
import prod3 from '../img-cat/prod3.webp'
import prod4 from '../img-cat/prod4.webp'
import prod5 from '../img-cat/prod5.webp'
import prod6 from '../img-cat/prod6.webp'
import prod7 from '../img-cat/prod7.jpg'
import prod8 from '../img-cat/prod8.webp'
import prod9 from '../img-cat/prod9.jpg'
import prod10 from '../img-cat/prod10.jpeg'
import prod11 from '../img-cat/prod11.webp'
import prod12 from '../img-cat/prod12.jpg'
import prod13 from '../img-cat/prod13.jpg'
import prod14 from '../img-cat/prod14.webp'
import prod15 from '../img-cat/prod15.webp'




import { Outlet, Link, Route, Routes } from 'react-router-dom';

import '../css/categorias.css';
function Categorias() {
  const [Productos, setProductos] = useState([]);

    useEffect(() => {
        // Lógica para obtener los usuarios de la base de datos al cargar el componente
        fetchProductos();
    }, []);

    const fetchProductos = async () => {

        const response = await axios.get('http://localhost:3001/productos'); // Ruta de la API para obtener catálogos
        setProductos(response.data)

        console.log(response.data);

    }
  return (
    <div>
      <Header></Header>
    <div>
        <div className='categoria'>
        <div className='cat-pri'>
            <div className='cat-nom'>
                <h1>Categorias</h1>
                <p style={{marginBottom: '30px', fontweight: 'bold'}}>___________________________</p>
            </div>
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
        <div className='cat-seg'>
            <div className='cat-Sec'>
                <ul>
                    <li>
                        <a href=''>Todo</a>
                    </li>
                    <br/>
                    <li>
                        <a href=''>Chocolate</a>
                    </li>
                    <br/>
                    <li>
                        <a href=''>Gomitas</a>
                    </li>
                    <br/>
                    <li>
                        <a href=''>Bombones</a>
                    </li>
                    <br/>
                    <li>
                        <a href=''>Acidos</a>
                    </li>
                    <br/>
                    <li>
                        <a href=''>Paletas</a>
                    </li>
                    <br/>
                    <li>
                        <a href=''>Caramelos</a>
                    </li>
                    <br/>
                    <li>
                        <a href=''>Barritas</a>
                    </li>
                    <br/>
                    <li>
                        <a href=''>Surtidos</a>
                    </li>
                </ul> 
            </div>
            <div className='flex-tol'>
            <div className='grid grid-cols-3 gap-4'>
            <div className="card">
  <img src={prod1}/>
  <div className="card-body">
    <h5 className="card-title">Bubulubu 24pz</h5>
    <p className="card-text">$137.99</p>
    <a href="#" className="btn btn-primary">Comprar</a>
  </div>
</div>

<div className="card">
  <img src={prod2}/>
  <div className="card-body">
    <h5 className="card-title">Casita Mix 10pz</h5>
    <p className="card-text">$153.99</p>
    <a href="#" className="btn btn-primary">Comprar</a>
  </div>
</div>
           
<div className="card">
  <img src={prod3}/>
  <div className="card-body">
    <h5 className="card-title">Paleta payaso 24pz</h5>
    <p className="card-text">$405.89</p>
    <a href="#" className="btn btn-primary">Comprar</a>
  </div>
</div>


            </div>
            <div className='grid grid-cols-3 gap-4'>
            <div className="card">
  <img src={prod4}/>
  <div className="card-body">
    <h5 className="card-title">Duvalín 18pz</h5>
    <p className="card-text">$33.00</p>
    <a href="/Menu_producto" className="btn btn-primary">Comprar</a>
  </div>
</div>


<div className="card">
  <img src={prod5}/>
  <div className="card-body">
    <h5 className="card-title">Duvalín 18pz</h5>
    <p className="card-text">$33.00</p>
    <a href="/Menu_producto" className="btn btn-primary">Comprar</a>
  </div>
</div>

<div className="card">
  <img src={prod6}/>
  <div className="card-body">
    <h5 className="card-title">Duvalín 18pz</h5>
    <p className="card-text">$33.00</p>
    <a href="/Menu_producto" className="btn btn-primary">Comprar</a>
  </div>
</div>



           
            </div>
            <div className='grid grid-cols-3 gap-4'>
            <div className="card">
  <img src={prod7}/>
  <div className="card-body">
    <h5 className="card-title">Bubulubu 24pz</h5>
    <p className="card-text">$137.99</p>
    <a href="#" className="btn btn-primary">Comprar</a>
  </div>
</div>

<div className="card">
  <img src={prod8}/>
  <div className="card-body">
    <h5 className="card-title">Bubulubu 24pz</h5>
    <p className="card-text">$137.99</p>
    <a href="#" className="btn btn-primary">Comprar</a>
  </div>
</div>

<div className="card">
  <img src={prod9}/>
  <div className="card-body">
    <h5 className="card-title">Bubulubu 24pz</h5>
    <p className="card-text">$137.99</p>
    <a href="#" className="btn btn-primary">Comprar</a>
  </div>
</div>
           
            </div>
            <div className='grid grid-cols-3 gap-4'>
            <div className="card">
  <img src={prod10}/>
  <div className="card-body">
    <h5 className="card-title">Bubulubu 24pz</h5>
    <p className="card-text">$137.99</p>
    <a href="#" className="btn btn-primary">Comprar</a>
  </div>
</div>

<div className="card">
  <img src={prod11}/>
  <div className="card-body">
    <h5 className="card-title">Bubulubu 24pz</h5>
    <p className="card-text">$137.99</p>
    <a href="#" className="btn btn-primary">Comprar</a>
  </div>
</div>

<div className="card">
  <img src={prod12}/>
  <div className="card-body">
    <h5 className="card-title">Bubulubu 24pz</h5>
    <p className="card-text">$137.99</p>
    <a href="#" className="btn btn-primary">Comprar</a>
  </div>
</div>


            </div>
            <div className='grid grid-cols-3 gap-4'>
            {Productos.map((productos) => (
                          
                                

                                   
                          <div className="card">
                            <img src={productos.imagen}/>
                            <div className="card-body">
                              <h5 className="card-title">{productos.nombre}</h5>
                              <p className="card-text">$ {productos.precio}</p>
                              
                              <a href="#" className="btn btn-primary">Comprar</a>
                            </div>                       
                                                              </div>
                           
                                                  ))}
   </div>
            <div className='cat-num'>
                <nav aria-label="Page navigation example" style={{marginLeft: '250px', marginTop: '80px', marginBottom: '50px'}}>
                    <ul class="pagination">
                        <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
							<span aria-hidden="true" style={{color: 'black'}}>&laquo;</span>
						</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#" style={{color: 'black'}}>1</a></li>
					<li class="page-item"><a class="page-link" href="#" style={{color: 'black'}}>2</a></li>
					<li class="page-item"><a class="page-link" href="#" style={{color: 'black'}}>3</a></li>
					<li class="page-item"><a class="page-link" href="#" style={{color: 'black'}}>4</a></li>
					<li class="page-item"><a class="page-link" href="#" style={{color: 'black'}}>5</a></li>
					<li class="page-item"><a class="page-link" href="#" style={{color: 'black'}}>6</a></li>
					<li class="page-item"><a class="page-link" href="#" style={{color: 'black'}}>7</a></li>
					<li class="page-item"><a class="page-link" href="#" style={{color: 'black'}}>8</a></li>
					<li class="page-item"><a class="page-link" href="#" style={{color: 'black'}}>9</a></li>
					<li class="page-item"><a class="page-link" href="#" style={{color: 'black'}}>10</a></li>
                    <li class="page-item">
						<a class="page-link" href="#" aria-label="Next">
							<span aria-hidden="true" style={{color: 'black'}}>&raquo;</span>
						</a>
					</li>
                    </ul>
                </nav>
            </div>
            </div>
        </div>
        </div>
    </div>
      <Footer></Footer>
    </div>

  )
}

export default Categorias



