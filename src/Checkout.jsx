import styles from './Checkout.module.css';
import CartContext from './CartContext.jsx';
import CartItem from './CartItem.jsx';
import { useContext } from 'react';
import { Link } from 'react-router-dom';


function Checkout() {

    const {cartItems, setCartItems} = useContext(CartContext)

    return (
<section className={styles['checkoutContainer']}>
        <h2 className={styles['checkoutHeader']}>Your Pokemon Cards</h2>
        {cartItems.length == 0 ? <p>You dont have cards in your cart! <Link className={styles['shopLink']} to='/shop'>Shop</Link></p> : null}
        <ul className={styles['unorderedItemList']}>
            {cartItems.map((item, index) => {
                return (
                    <CartItem key={index} item={item} cartItems={cartItems} setCartItems={setCartItems} index={index}/>
                )
            })}
        </ul>
        <div className={styles['totalContainer']}>
            <h4 className={styles['overallTotal']}>Total: ${Number(cartItems.reduce((acc, curr) => {
                        return acc + Number(curr.totalPrice)
                    }, 0)).toFixed(2)}
            </h4>
        </div>
</section>
    )
}

export default Checkout;