import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Footer from './Components/Footer'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './Pages/Home'
import Formulario from './Pages/Formulario'
import IndexUser from './Pages-Dash/IndexUser'
import AddUser from './Pages-Dash/AddUser'
import Menu_producto from './Pages/Menu_producto'
import categorias from './Pages/categorias'
import Categorias from './Pages/categorias'

import Index from './Pages/Index'
import PerfilUsuario from './Pages/PerfilUsuario'
import Promociones from './Pages/Promociones'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/Formulario",
      element: <Formulario/>
    },
    {
      path: "/IndexUser",
      element: <IndexUser/>
    },
    {
      path: "/AddUser",
      element : <AddUser/>

    },
    {
      path: "/Menu_producto",
      element : <Menu_producto />
    },
    {
      path: "/PerfilUsuario",
      element : <PerfilUsuario />
    },
    {
      path: "/Categorias",
      element: <Categorias />
    },
    {
      path: "/Index",
      element: <Index/>
    },
    {
      path: "/Promociones",
      element: <Promociones />
    }




    
])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
