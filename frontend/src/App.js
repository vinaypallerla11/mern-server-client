import React from 'react';
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'
import Cart from './components/Cart'
import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginForm />} />
          <Route path='/' element={<Home />} />
          <Route path="/register" element={<RegistrationForm />}/>
          <Route path='/about' element={<About/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;