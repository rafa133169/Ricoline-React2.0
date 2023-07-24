import React from 'react'
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../Components/Footer';
import Cards from '../Components/Cards';
import Cards2 from '../Components/Cards2';
import Cards3 from '../Components/Cards3';
import Cards4 from '../Components/Cards4';
import Cards5 from '../Components/Cards5';
import Cards6 from '../Components/Cards6';
import Cards7 from '../Components/Cards7';
import Cards8 from '../Components/Cards8';
import Cards9 from '../Components/Cards9';
import Cards10 from '../Components/Cards10';
import Cards11 from '../Components/Cards11';
import Cards12 from '../Components/Cards12';
import Cards13 from '../Components/Cards13';
import Cards14 from '../Components/Cards14';
import Cards15 from '../Components/Cards15';
import { Outlet, Link, Route, Routes } from 'react-router-dom';

import '../css/categorias.css';
function Categorias() {
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
            <Cards Nombre={"Bubulubu 24pz"} Precio={'$137.99'}></Cards>
            <Cards2 Imagen={''} Nombre={"Pikaros 30pz"} Precio={'$133.00'}></Cards2>
            <Cards3 Imagen={''} Nombre={"Casita Mix 10pz"} Precio={'$153.99'}></Cards3>
            </div>
            <div className='grid grid-cols-3 gap-4'>
            <Cards4 Imagen={''} Nombre={"Paleta payaso 24pz"} Precio={'$399'}></Cards4>
            <Cards5 Imagen={''} Nombre={"Duvalín 18pz"} Precio={'$33.00'}></Cards5>
            <Cards6 Imagen={''} Nombre={"Barra de chocolate Chocoretas 12p"} Precio={'$70.50'}></Cards6>
            </div>
            <div className='grid grid-cols-3 gap-4'>
            <Cards7 Imagen={''} Nombre={"Barra de chocolate Duvalín 12pz"} Precio={'$70.50'}></Cards7>
            <Cards8 Imagen={''} Nombre={"Barra de chocolate Kranky 12pz"} Precio={'$70.50'}></Cards8>
            <Cards9 Imagen={''} Nombre={"Bubulubu Mini Crush 25pz"} Precio={'$75.00'}></Cards9>
            </div>
            <div className='grid grid-cols-3 gap-4'>
            <Cards10 Imagen={''} Nombre={"Huevitos 500g"} Precio={'$57.88'}></Cards10>
            <Cards11 Imagen={''} Nombre={"Paquete diversión"} Precio={'$247.96'}></Cards11>
            <Cards12 Imagen={''} Nombre={"Bubulubu Mini 25pz"} Precio={'$75.85'}></Cards12>
            </div>
            <div className='grid grid-cols-3 gap-4'>
            <Cards13 Imagen={''} Nombre={"Chocoretas 500g"} Precio={'$141.99'}></Cards13>
            <Cards14 Imagen={''} Nombre={"Gomilocas 1kg"} Precio={'$218.00'}></Cards14>
            <Cards15 Imagen={''} Nombre={"Club Ricolino 90pz"} Precio={'$150.00'}></Cards15>
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



