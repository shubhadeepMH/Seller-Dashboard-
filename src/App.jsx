import { useEffect, useState } from 'react'
import './App.css'
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './components/Register'
import PrivateComponent from './components/PrivateComponent'
import Navbar from './components/Navbar'
import AddProduct from './components/AddProduct'
import LogIn from './components/LogIn'
import Products from './components/Products'
import UpdateProducts from './components/UpdateProducts'

function App() {

  return (
    <BrowserRouter className="App">


      <Navbar />


      
      <div className='body'>
        <Routes>
          <Route element={<PrivateComponent />}>

            <Route path='/' element={<Products />} />
            <Route path='add-product' element={<AddProduct />} />
            <Route path='/update-product/:id' element={<UpdateProducts />} />
            <Route path='contact' element={<h1>This is Contact page</h1>} />
          </Route>
          <Route path='register' element={<Register />} />
          <Route path='logIn' element={<LogIn />} />
        </Routes>



      </div>




    </BrowserRouter>
  )
}

export default App
