import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link, Route, Routes } from 'react-router-dom';
import Home from "../Pages/Home";
import Formulario from "../Pages/Formulario";

function Header() {



  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    // <>
      
    //   <Navbar bg="dark" data-bs-theme="dark">
    //     <Container>
    //       <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    //       <Nav className="me-auto">
    //         <Nav.Link href="/">Home</Nav.Link>
    //         <Nav.Link href="/Formulario">Fomulario</Nav.Link>
    //         <Nav.Link href="/Login">Login</Nav.Link>
    //         <Nav.Link href="/IndexUser">Dash</Nav.Link>
    //       </Nav>
    //     </Container>
    //   </Navbar>

      

    // </>

    <header>
  <div className="parte1">
    <div className="RedesSociales">
      <ul>
        <li>
          <a href="https://www.facebook.com/RicolinoOficial/?locale=es_LA" id="fac">
            <i className="bi bi-facebook"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/ricolinomx?lang=es" id="twi">
            <i className="bi bi-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/ricolinomx/?hl=es" id="ins">
            <i className="bi bi-instagram"></i>
          </a>
        </li>
        <li>
          
        </li>
      </ul>
    </div>
    <div className="Nombre">
      <h1 id="nom" className="text-center">Ricoline</h1>
    </div>
    <div className="loginCarr">
      <ul>
        <li>
          <a href="login_registro.html" id="login">
            <i className="bi bi-person-circle"></i> login
          </a>
        </li>
        <br />
        <li>
          <a href="carrito.html" id="carrito">
            <i className="bi bi-cart4"></i> Carrito
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div className="parte2">
    <div className="menu">
      <ul>
        <li>
          <a href="Index.html" id="ini">| Inicio |</a>
        </li>
        <li>
          <a href="categorias.html" id="cat">| Categorias |</a>
        </li>
        <li>
          <a href="promociones.html" id="prom">| Promociones |</a>
        </li>
      </ul>
    </div>
    <div className="buscar">
      <form className="d-flex" role="search">
        <i className="bi bi-search" id="lupa"></i>
        <input type="search" placeholder="" id="espacio"  />
      </form>
    </div>
  </div>
</header>


  )

}

export default Header