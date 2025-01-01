import { useContext, useEffect } from 'react';
import SideBarContext from './SideBarContext.jsx';
import styles from './ShoppingCartSideBar.module.css';
import CartItem from './CartItem.jsx';
import { Link } from "react-router-dom";


function ShoppingCartSideBar({cartItems, setCartItems}) {


const {showSideBar, setShowSideBar} = useContext(SideBarContext);



if (showSideBar) {
    return (
        <>
        <div className={`${styles['sideBarBackground']} sideBarBackground`} onClick={(e) => {
            // 
            e.target.classList[1] == 'sideBarBackground' ? setShowSideBar(prev => false) : null;
        }}>
            <aside className={`${styles['sideBar']} aside`}>
                <button className={`${styles['closeBtn']}`} onClick={() => {
                    setShowSideBar(prev => false)
                    }}>X</button>
                <h3 className={styles['shoppingCartHeader']}>🛒 Your Shopping Cart 🛒</h3>
                {cartItems.length == 0 ? <p className={styles['emptyCartText']}>It looks like you don&apos;t have anything in your cart...</p> : null}
                <ul className={styles['unorderedItemList']}>
                    {cartItems.map((item, index) => {
                        return (
                            <CartItem key={index} item={item} cartItems={cartItems} setCartItems={setCartItems} index={index}/>
                        )
                    })}
                </ul>
                <h4 className={styles['overallTotal']}>Total: ${Number(cartItems.reduce((acc, curr) => {
                    return acc + Number(curr.totalPrice)
                }, 0)).toFixed(2)}</h4>
                {cartItems.length != 0 ? (<Link className={styles['checkoutLink']} to={'/checkout'} onClick={() => {
                    setShowSideBar(prev => false)
                }}><button className={styles['checkoutBtn']}>Checkout</button></Link>) : null}
                
            </aside>
        </div>
        </>
    )
}
}

export default ShoppingCartSideBar;