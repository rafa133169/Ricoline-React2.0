import React from 'react';
import "../css/estilos.css";
import "./loginRegistrojs";



function Login  ()  {
  return (
    <div className="contenedor_todo">
      <div className="caja_trasera">
        <div className="caja_trasera_login">
          <h3>¿Ya tienes una cuenta?</h3>
          <p>Inicia sesión para entrar a la página</p>
          <button id="btn iniciar-sesion">Iniciar Sesión</button>
        </div>
        <div className="caja_trasera_registro">
          <h3>¿Aún no tienes una cuenta?</h3>
          <p>Regístrate para que puedas iniciar sesión</p>
          <button id="btn registrarse">Registrarse</button>
        </div>
      </div>
      {/* formulario de login y registro */}
      <div className="contenedor_login-registro">
        <form action="" className="formulario_login">
          <h2>Iniciar Sesión</h2>
          <input type="email" placeholder="Correo Electrónico" />
          <input type="password" placeholder="Contraseña" />
          <button>Entrar</button>
        </form>
        <form action="php/registro_usuario_BE.php" method="POST" className="formulario_registro">
          <h2>Registrarse</h2>
          <input type="text" placeholder="Nombre Completo" name="nombre_completo" />
          <input type="text" placeholder="Usuario" name="usuario" />
          <input type="text" placeholder="Correo Electrónico" name="correo" />
          <input type="password" placeholder="Contraseña" name="contrasena" />
          <button>Registrarse</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
