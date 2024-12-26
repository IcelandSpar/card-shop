import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Home.jsx';
import Shop from './Shop.jsx';
import HeaderNav from './HeaderNav.jsx';
import CartContext from './CartContext.jsx';
import SideBarContext from './SideBarContext.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';
import ShoppingCartSideBar from './ShoppingCartSideBar.jsx';



function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showSideBar, setShowSideBar] = useState(false);



  return (
    <>
    <SideBarContext.Provider value={{showSideBar, setShowSideBar}}>
      <ShoppingCartSideBar cartItems={cartItems} setCartItems={setCartItems}></ShoppingCartSideBar>
    <HeaderNav shoppingCartCount={cartItems}/>
      <CartContext.Provider value={{cartItems, setCartItems}}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop' element={<Shop/>} errorElement={<ErrorBoundary/>}/>
          <Route path='*' element={<ErrorBoundary/>}/>
          {/* <Route path='/checkout' element={}/> */}
        </Routes>
      </CartContext.Provider>
      </SideBarContext.Provider>
    </>
  )
}

export default App;
