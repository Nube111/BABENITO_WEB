import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Logeo from './Paginas/Logeo'
import Interfazp from './Paginas/Interfazp/indexin'
import SobrePedido from './Paginas/sobrepedido/indexsobre'
import CrearPedido from './Paginas/crearpedido/indexcrepe'
import CrearModelo from './Paginas/crearmodelo/Indexcremo'

import './index.css'
import Trabajador from './Paginas/Trabajador'
import PanelTrabajador from './Paginas/PanelTrabajador/index'
import Datospedido from './Paginas/Datospedido/index'; 



const rutas = createBrowserRouter([
  {
    path:"/",
    element: <Logeo></Logeo>,

  },

  {
    path:"/interfazp",
    element: <Interfazp></Interfazp>,

  },

  {
    path:"/sobrepedido",
    element: <SobrePedido></SobrePedido>,

  },

  {
    path:"/crearpedido",
    element: <CrearPedido></CrearPedido>,

  },


  
  {
    path:"/crearmodelo",
    element: <CrearModelo></CrearModelo>,

  },

  {
    path:"/Trabajador",
    element: <Trabajador></Trabajador>,

  },

  {
    path:"/PanelTrabajador",
    element: <PanelTrabajador></PanelTrabajador>,

  },

  {
    path:"/Datospedido",
    element: <Datospedido></Datospedido>,

  },

 
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={rutas}></RouterProvider>
  </StrictMode>,
)


