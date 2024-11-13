import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Home.jsx';
import Shop from './Shop.jsx';
import HeaderNav from './HeaderNav.jsx';
import CartContext from './CartContext.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';



function App() {
  const [cartItems, setCartItems] = useState(1000);



  return (
    <>
    <HeaderNav shoppingCartCount={cartItems}/>
      <CartContext.Provider value={{cartItems, setCartItems}}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop' element={<Shop/>} errorElement={<ErrorBoundary/>}/>
          <Route path='*' element={<ErrorBoundary/>}/>
        </Routes>
      </CartContext.Provider>
    </>
  )
}

export default App;
