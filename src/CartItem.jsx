import styles from './CartItem.module.css';


function CartItem({item, key, cartItems, setCartItems, index}) {

    return (
        <li className={styles['cartItemContainer']}>
            <p className={styles['itemCount']}>{item.itemCount}</p>
            <img className={styles['itemImage']} src={item.imageUrl} alt={item.name} width={'60px'}/>
            <div className={styles['itemDetails']}>
                <p className={styles['itemName']}>{item.name}</p>
                <p>Price: ${item.price}</p>
                <button className={styles['deleteBtn']} onClick={() => {
                    setCartItems(prev => {
                        return prev.filter((item, currIndex) => index != currIndex)
                    })
                }}>Remove</button>
            </div>
            <div className={styles['itemPriceDetails']}>
                <div className={styles['itemCountAndPrice']}>
                    
                </div>
                <p className={styles['totalItemPrice']}>Total: ${item.totalPrice}</p>
            </div>
        </li>
    )
}

export default CartItem;