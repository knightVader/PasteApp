import React from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router'
import Home from '../components/Home'
import Pastes from '../components/Pastes'
import Viewpaste from '../components/Viewpaste'
import NotFound from '../components/NotFound'
import NavBar from '../components/NavBar'
import {Toaster} from 'react-hot-toast'
import EditPaste from '../components/EditPaste'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: 
      <div>
        <NavBar/>
        <Home/>
      </div>
    },
    {
      path: "/pastes",
      element: 
      <div>
        <NavBar/>
        <Pastes/>
      </div>
    },
    {
      path: "/pastes/view/:id",
      element:
      <div>
        <NavBar/>
        <Viewpaste/>
      </div>
    },
    {
      path: "/pastes/edit/:id",
      element:
      <div>
        <NavBar/>
        <EditPaste/>
      </div>
    },
    {
      path: "*",
      element: <NotFound/>
    }

  ]
)

const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
      <Toaster/>
    </div>
  )
}

export default App
