import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Footer from './Components/Footer'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './Pages/Home'
import Formulario from './Pages/Formulario'
import IndexProductos from './Pages-Dash/IndexProductos'
import AddProducto from './Pages-Dash/AddProducto'
import Menu_producto from './Pages/Menu_producto'
import categorias from './Pages/categorias'
import Categorias from './Pages/categorias'
import IndexCategorias from './Pages-categories/IndexCategorias'
import UpdProductos from './Pages-Dash/UpdProductos'
import AddCategoria from './Pages-categories/AddCategoria'
import UpdCategorias from './Pages-categories/UpdCategorias'

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
      path: "/IndexProductos",
      element: <IndexProductos/>
    },
    {
      path: "/AddProducto",
      element : <AddProducto/>

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
    },
    {
      path: "/IndexCategorias",
      element: <IndexCategorias />
    },
    {
      path: "/EditProducto/:id",
      element : <UpdProductos/>

    },
    {
      path: "/AddCategoria",
      element: <AddCategoria/>
    },
    {
      path: "EditCategoria/:id",
      element: <UpdCategorias />
    }




    
])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
