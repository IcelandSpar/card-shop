import { useContext } from 'react';
import CartContext from './CartContext.jsx';

function Shop() {
    const {cartItems} = useContext(CartContext)
    return(
        <>

        <p>The Shop {cartItems}</p>
        </>
    )
}

export default Shop;