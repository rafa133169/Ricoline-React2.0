import React from 'react'
import '../css/estilos.css';
import paletaPayaso from '../imagen/image 105.png';
import ESR from '../imagen/Captura-de-Pantalla-2020-05-18-a-las-10.47 1.png';
import img129 from '../imagen/image 129.png';
import img115 from '../imagen/image 115.png';
import 'bootstrap/dist/css/bootstrap.css';

function Footer ()  {
  return (
    
    
<footer className="">
  <div className="footer1">
    <form className="row g-3">
      <div className="footer_correo">
        <label htmlFor="inputcorreo" className="visually-hidden"></label>
        <input type="email" placeholder="Correo electrónico" id="footer_correo" />
      </div>
      <div>
        {/* <button className="footer_correo_boton" type="submit" class="btn btn-primary mb-3">
          <h3 style={{ fontSize: '30px' }}>Registrarse</h3>
        </button> */}
      <button
  className="footer_correo_boton btn btn-primary mb-3"
  style={{
    position: 'absolute',
    left: '990px',
    top: '252px',
    width: '161px',
    height: '71px',
    background: '#FBE200',
    borderRadius: '40.50px',
    borderStyle: 'solid',
    borderColor: '#FBE200',
    
  }}
>
  <h3 style={{ fontSize: '28px',color:'black' }}>Registrarse</h3>
</button>

      </div>
    </form>

    <img
      style={{
        width: '137px',
        height: '88px',
        left: '50px',
        top: '48px',
        position: 'absolute',
        boxShadow: '0px 4px 10px rgba(88.01, 176.97, 205.06, 0.93) inset',
      }}
      src={img115}
    />

    <div className="footer_registrate_text">Registrate y comienza a comprar</div>

    <img
      style={{
        width: '50px',
        height: '55px',
        left: '100px',
        top: '200px',
        position: 'absolute',
        transform: 'rotate(-16.43deg)',
        transformOrigin: '0 0',
      }}
      src={paletaPayaso}
    />
    <img
      style={{
        width: '84px',
        height: '84px',
        left: '1150px',
        top: '374.76px',
        position: 'absolute',
        transform: 'rotate(-16.43deg)',
        transformOrigin: '0 0',
      }}
      src={paletaPayaso}
    />
    <img
      style={{
        width: '84px',
        height: '84px',
        left: '1000.60px',
        top: '346px',
        position: 'absolute',
        transform: 'rotate(25.07deg)',
        transformOrigin: '0 0',
      }}
      src={paletaPayaso}
    />
    <img
      style={{
        width: '62.69px',
        height: '62.69px',
        left: '1199px',
        top: '214.86px',
        position: 'absolute',
        transform: 'rotate(8.30deg)',
        transformOrigin: '0 0',
      }}
      src={paletaPayaso}
    />
    <img
      style={{
        width: '84px',
        height: '84px',
        left: '254.60px',
        top: '331px',
        position: 'absolute',
        transform: 'rotate(25.07deg)',
        transformOrigin: '0 0',
      }}
      src={paletaPayaso}
    />

    {/* inicia lo de en medio */}
    <img
      style={{
        width: '63.91px',
        height: '63.91px',
        left: '442.08px',
        top: '371px',
        position: 'absolute',
        transform: 'rotate(25.07deg)',
        transformOrigin: '0 0',
      }}
      src={paletaPayaso}
    />
    <img
      style={{
        width: '63.91px',
        height: '63.91px',
        left: '875.55px',
        top: '380px',
        position: 'absolute',
        transform: 'rotate(3.19deg)',
        transformOrigin: '0 0',
      }}
      src={paletaPayaso}
    />
    <img
      style={{
        width: '63.91px',
        height: '63.91px',
        left: '1060px',
        top: '371px',
        position: 'absolute',
        transform: 'rotate(-17.08deg)',
        transformOrigin: '0 0',
      }}
      src={paletaPayaso}
    />
    <img
      style={{
        width: '63.91px',
        height: '63.91px',
        left: '735px',
        top: '371px',
        position: 'absolute',
        transform: 'rotate(-17.08deg)',
        transformOrigin: '0 0',
      }}
      src={paletaPayaso}
    />
    <img
      className="paletapayaso"
      style={{
        width: '63.91px',
        height: '63.91px',
        left: '577px',
        top: '395px',
        position: 'absolute',
        transform: 'rotate(-17.08deg)',
        transformOrigin: '0 0',
      }}
      src={paletaPayaso}
    />
    {/* termina lo de en medio */}
    <img
      className="paletapayaso"
      style={{
        width: '84px',
        height: '84px',
        left: '42px',
        top: '274.21px',
        position: 'absolute',
        transform: 'rotate(-0.83deg)',
        transformOrigin: '0 0',
      }}
      src={paletaPayaso}
    />
    <img
      style={{
        width: '48.60px',
        height: '48.60px',
        left: '189px',
        top: '283.70px',
        position: 'absolute',
        transform: 'rotate(-0.83deg)',
        transformOrigin: '0 0',
      }}
      src={paletaPayaso}
    />
    <img
      style={{
        width: '48.60px',
        height: '48.60px',
        left: '1230px',
        top: '315.70px',
        position: 'absolute',
        transform: 'rotate(-0.83deg)',
        transformOrigin: '0 0',
      }}
      src={paletaPayaso}
    />
    <img
      style={{
        width: '200px',
        height: '50px',
        left: '1050px',
        top: '48px',
        position: 'absolute',
      }}
      src={img129}
    />
  </div>


  <div className="footer2">
  <div className="info">
    <div className="column">
      <h2 style={{ color: 'rgb(64, 61, 61)', fontWeight: 'bold' }}>Informacion</h2>
      <p>
        <a href="" style={{ textDecoration: 'none', color: 'rgb(97, 97, 97)' }}>Formas de pago</a>
      </p>
      <p>
        <a href="" style={{ textDecoration: 'none', color: 'rgb(97, 97, 97)' }}>Costos de envio</a>
      </p>
      <p>
        <a href="" style={{ textDecoration: 'none', color: 'rgb(97, 97, 97)' }}>Tiempo de envio aproximado</a>
      </p>
    </div>
    <div className="column">
      <h2 style={{ color: 'rgb(64, 61, 61)', fontWeight: 'bold' }}>Politicas</h2>
      <p>
        <a style={{ textDecoration: 'none', color: 'rgb(97, 97, 97)' }}>Terminos y condiciones</a>
      </p>
      <p>
        <a style={{ textDecoration: 'none', color: 'rgb(97, 97, 97)' }}>Avisos de privacidad</a>
      </p>
    </div>
    <div className="column">
      <h2 style={{ color: 'rgb(64, 61, 61)', fontWeight: 'bold' }}>Contactos</h2>
      <a href="" style={{ textDecoration: 'none', color: 'rgb(97, 97, 97)' }}>+52 9983892312</a>
      <br />
      <br />
      <a href="" style={{ textDecoration: 'none', color: 'rgb(97, 97, 97)' }}>22393205@utcancun.edu.mx</a>
    </div>
    <a className="column">
      <h2 style={{ color: 'rgb(64, 61, 61)', fontWeight: 'bold' }}>Siguenos</h2>
      <a href="https://www.instagram.com/ricolinomx/?hl=es" style={{ position: 'absolute', left: '1000px', top: '80px', textDecoration: 'none' }}>
        <svg instagram xmlns="http://www.w3.org/2000/svg" width="30" height="46" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16" style={{ color: 'rgb(97, 97, 97)', marginRight: '15px' }}>
        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
        </svg>
      </a>
      <a href="https://www.facebook.com/RicolinoOficial/?locale=es_LA" style={{ position: 'absolute', left: '1050px', top: '80px', textDecoration: 'none' }}>
        <svg id="facebook" xmlns="http://www.w3.org/2000/svg" width="30" height="46" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16" style={{ color: 'rgb(97, 97, 97)', marginRight: '15px' }}>
        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
        </svg>
      </a>
      <a href="https://twitter.com/ricolinomx?lang=es" style={{ position: 'absolute', left: '1110px', top: '80px', textDecoration: 'none' }}>
        <svg id="twitter" xmlns="http://www.w3.org/2000/svg" width="30" height="46" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16" style={{ color: 'rgb(97, 97, 97)', marginRight: '15px' }}>
        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
        </svg>
      </a>
    </a>
    <img style={{ width: '191px', height: '74px', position: 'absolute', top: '220px', left: '1100px' }} src={ESR} />
    <div>
      <p>Copyrighct © 2023</p>
      <p>Ricoline S.A de C.V. Todos los derechos reservados </p>
    </div>
  </div>
</div>

</footer> 


  )
};

export default Footer;
