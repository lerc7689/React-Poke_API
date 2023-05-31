import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from "./router"
import { UserNameProvider } from './context/UserNameContext'
import { BackgroundProvider } from './context/BackgroundContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserNameProvider>
    <BackgroundProvider>
      <RouterProvider router={router}/>
      </BackgroundProvider>
    </UserNameProvider>
  </React.StrictMode>,
)
