import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Pets from './pages/Pets'
import Product from './pages/Product'
import Doctors from './pages/Doctors'
import ProductDetails from './pages/ProductDetails'
import Orders from './pages/Orders'
import {Toaster} from 'react-hot-toast'
import Footer from './components/Footer'
import ContactUs from './pages/ContactUs'

const App = () => {

  const isAdminRoute = useLocation().pathname.startsWith('/admin')
  return (
    <>
    <Toaster/>
    
     {!isAdminRoute && <Navbar/> }
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/pets' element={<Pets />}/>
        <Route path='/product' element={<Product />}/>
        <Route path='/product/:id' element={<ProductDetails />}/>
        <Route path='/doctors' element={<Doctors />}/>
        <Route path='/orders' element={<Orders />}/>
        <Route path='/contactus' element={<ContactUs />}/>
      </Routes>
      {!isAdminRoute && <Footer/> }

    </>
  )
}

export default App
