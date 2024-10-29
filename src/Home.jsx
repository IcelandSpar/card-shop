import HeaderNav from "./HeaderNav.jsx";
import { useContext } from "react";
import CartContext from "./CartContext.jsx";

function Home() {
  const { cartItems, setCartItems } = useContext(CartContext);

  return (
    <>
      <h1 className="hello">This is Home{cartItems}</h1>
      <button onClick={()=> {
        setCartItems(prev => prev + 1)
      }}>Click to add items to cart</button>
    </>
  );
}

export default Home;
