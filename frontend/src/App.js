import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Cart from './components/Cart';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
// import NavBar from './components/NavBar';

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
      {/* <NavBar /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        </Routes>
           
      </CartProvider>
      

    </BrowserRouter>
  );
}

export default App;
