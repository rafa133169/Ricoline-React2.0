import React from 'react'
import '../css/inicio.css';
import '../css/estilos.css'
import { Outlet, Link, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../Components/Footer';
import Cards from '../Components/Cards';
import Cards2 from '../Components/Cards2';
import Cards3 from '../Components/Cards3';
import Cards4 from '../Components/Cards4';
import Cards5 from '../Components/Cards5';
import Cards6 from '../Components/Cards6';
import Cards7 from '../Components/Cards7';
import cat1 from '../img-inicio/cat1.jpeg'
import cat2 from '../img-inicio/cat2.jpeg'
import cat3 from '../img-inicio/cat3.jpeg'
import cat4 from '../img-inicio/cat4.jpeg'
import cat5 from '../img-inicio/cat5.jpeg'
import cat6 from '../img-inicio/cat6.png'
import cat7 from '../img-inicio/cat7.jpeg'
import cat8 from '../img-inicio/cat8.jpeg'
import prod1 from '../img-cat/prod1.jpeg'
import prod2 from '../img-cat/prod2.jpg'
import prod3 from '../img-cat/prod3.webp'
import prod4 from '../img-cat/prod4.webp'
import Menu_producto from '../Pages/Menu_producto';

function Index() {

 
  return (
    <div>
          

        <div className='inicio'>
        <h1 className="ini-sub">Los más vendidos</h1>
        <div className="cart-pri">
        <div className='grid grid-cols-4 gap-4'>
         
            <Cards Nombre={"Bubulubu 24pz"} Precio={'$137.99'}></Cards>
            <Cards2  Nombre={"Pikaros 30pz"} Precio={'$133.00'}></Cards2>
            <Cards3  Nombre={"Casita Mix 10pz"} Precio={'$153.99'}></Cards3>
            <Cards4  Nombre={"Paleta payaso 24pz"} Precio={'$399'}></Cards4>
            </div>
        </div>
        <div className="ini-cat">
        <h1 className="ini-sub">Categorias</h1>
        <div className=' flex-tol'>
        <div className='grid grid-cols-3 gap-4'>
        <div className="ini-choco" id="chocolate" >
					<Link to="/Categorias" className="ini-text">Chocolotes</Link>
					<img src={cat1} className="img-cat" />
				</div>
        <div className="ini-choco" id="gomita">
					<Link to="/Categorias" className="ini-text">Gomitas</Link>
					<img src={cat2} class="img-cat" />
				</div>
        <div className="ini-choco" id="bombon">
					<Link to="/Categorias" className="ini-text">Bombones</Link>
					<img src={cat3} class="img-cat" />
				</div>
        </div>
        <br />
        <br />
        <div className='grid grid-cols-3 gap-4'>
        <div class="ini-choco" id="acido">
					<Link to='/Categorias' class="ini-text">Acidos</Link>
					<img src={cat4} class="img-cat" />
				</div>
        <div className="ini-choco" id="palet">
					<Link to='/Categorias' className="ini-text">Paletas</Link>
					<img src={cat5}  id="paletas" />
				</div>
        <div className="ini-choco" id="caram">
					<Link to='/Categorias' className="ini-text">Caramelos</Link>
					<img src={cat6} class="img-cat" />
				</div>
        </div>
        <br />
        <br />
        <div className='grid grid-cols-2 gap-10'>
        <div className="ini-choco" id="barra">
					<Link to='/Categorias' className="ini-text">Barritas</Link>
					<img src={cat7} class="img-cat" />
				</div>
        <div class="ini-choco" id="surti">
					<Link to="/Categorias" class="ini-text">Surtido</Link>
					<img src={cat8} class="img-cat" />
				</div>
        </div>
        </div>
        </div>
          <div>
          <h1 className="ini-sub_2" style={{fontSize:'50px', marginTop:'60px'}}>Lo más nuevo</h1>
          <div className='cart-pri' style={{marginBottom:'60px'}}>
            <div className='grid grid-cols-3 gap-6'>
            <Cards5  Nombre={"nombre"} Precio={'precio'}></Cards5>
            <Cards6  Nombre={"nombre"} Precio={'precio'}></Cards6>
            <Cards7  Nombre={"nombre"} Precio={'precio'}></Cards7>
            </div>
          </div>
          </div>
        </div>









    </div>
  )
}

export default Index
