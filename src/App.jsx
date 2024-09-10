import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useState, useContext} from 'react'
import {pizzaCart} from './assets/js/pizzas'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import Cart from './pages/Cart'
import Pizza from './pages/Pizza'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'
import  PizzaProvider  from "./context/PizzaContext";
import CartProvider from './context/CartContext'



function App() {

  return (
    <>
    <div >
      <PizzaProvider>
        <CartProvider>
            <Navbar/>  
                <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/register' element={<RegisterPage/>}/>
                  <Route path='/login' element={<LoginPage/>}/>
                  <Route path='/cart' element={<Cart/>}/>
                  <Route path='/pizza' element={<Pizza/>}/>
                  <Route path='/profile' element={<Profile/>}/>
                  <Route path='/404' element={<NotFound/>}/>
                  <Route path="*"  element={<NotFound/>}/>
                </Routes>  
                <Footer/>
          </CartProvider>
         </PizzaProvider> 
    </div>
    </>
  )
}

export default App
