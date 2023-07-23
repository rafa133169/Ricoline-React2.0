import React from 'react'
import '../css/inicio.css';
import '../css/estilos.css'
import Header from '../components/Header';
import Footer from '../Components/Footer';
import Cards from '../Components/Cards';


function Index() {
  return (
    <div>
            <Header></Header>

        <div className='inicio'>
        <h1 className="ini-sub">Los más vendidos</h1>
        <div className="cart-pri">
        <div className='grid grid-cols-4 gap-4'>
            <Cards Imagen={'/img-cat/prod1.jpeg'} Nombre={"Bubulubu 24pz"} Precio={'$137.99'}></Cards>
            <Cards Imagen={''} Nombre={"Pikaros 30pz"} Precio={'$133.00'}></Cards>
            <Cards Imagen={''} Nombre={"nombre"} Precio={'precio'}></Cards>
            <Cards Imagen={''} Nombre={"nombre"} Precio={'precio'}></Cards>
            </div>
        </div>
        <div className="ini-cat">
        <h1 className="ini-sub">Categorias</h1>
        <div className=' flex-tol'>
        <div className='grid grid-cols-3 gap-4'>
        <div className="ini-choco" id="chocolate">
					<h1 className="ini-text">Chocolotes</h1>
					<img src="img-inicio/cat1.jpeg" className="img-cat" />
				</div>
        <div className="ini-choco" id="gomita">
					<h1 className="ini-text">Gomitas</h1>
					<img src="img-inicio/cat2.jpeg" class="img-cat" />
				</div>
        <div className="ini-choco" id="bombon">
					<h1 className="ini-text">Bombones</h1>
					<img src="img-inicio/cat3.jpeg" class="img-cat" />
				</div>
        </div>
        <br />
        <br />
        <div className='grid grid-cols-3 gap-4'>
        <div class="ini-choco" id="acido">
					<h1 class="ini-text">Acidos</h1>
					<img src="img-inicio/cat4.jpeg" class="img-cat" />
				</div>
        <div className="ini-choco" id="palet">
					<h1 className="ini-text">Paletas</h1>
					<img src="img-inicio/cat5.jpeg"  id="paletas" />
				</div>
        <div className="ini-choco" id="caram">
					<h1 className="ini-text">Caramelos</h1>
					<img src="img-inicio/cat6.png" class="img-cat" />
				</div>
        </div>
        <br />
        <br />
        <div className='grid grid-cols-2 gap-10'>
        <div className="ini-choco" id="barra">
					<h1 className="ini-text">Barritas</h1>
					<img src="img-inicio/cat7.jpeg" class="img-cat" />
				</div>
        <div class="ini-choco" id="surti">
					<h1 class="ini-text">Surtido</h1>
					<img src="img-inicio/cat8.jpeg" class="img-cat" />
				</div>
        </div>
        </div>
        </div>
          <div>
          <h1 className="ini-sub_2" style={{fontSize:'50px', marginTop:'60px'}}>Lo más nuevo</h1>
          <div className='cart-pri' style={{marginBottom:'60px'}}>
            <div className='grid grid-cols-3 gap-6'>
            <Cards Imagen={''} Nombre={"nombre"} Precio={'precio'}></Cards>
            <Cards Imagen={''} Nombre={"nombre"} Precio={'precio'}></Cards>
            <Cards Imagen={''} Nombre={"nombre"} Precio={'precio'}></Cards>
            </div>
          </div>
          </div>
        </div>








        <Footer></Footer>

    </div>
  )
}

export default Index
