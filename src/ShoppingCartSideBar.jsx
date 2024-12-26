import { useContext } from 'react';
import SideBarContext from './SideBarContext.jsx';
import styles from './ShoppingCartSideBar.module.css';
import CartItem from './CartItem.jsx';


function ShoppingCartSideBar({cartItems}) {

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
                <h3 className={styles['shoppingCartHeader']}>Your Shopping Cart</h3>
                {cartItems.length == 0 ? <p>It Looks like you dont have anything in your cart...</p> : null}
                <ul className={styles['unorderedItemList']}>
                    {cartItems.map((item, index) => {
                        return (
                            <CartItem key={index} item={item}/>
                        )
                    })}
                </ul>
                <h4 className={styles['overallTotal']}>Total: ${
                    (cartItems).reduce((acc, currVal) => {
                      return acc + Number(currVal.totalPrice)
                    }, 0).toFixed(2)
                  }</h4>
                <button className={styles['checkoutBtn']}>Checkout</button>
            </aside>
        </div>
        </>
    )
}
}

export default ShoppingCartSideBar;