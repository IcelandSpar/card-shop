import styles from './CartItem.module.css';
function CartItem({item}) {
    return (
        <li className={styles['cartItemContainer']}>
            <img className={styles['itemImage']} src={item.imageUrl} alt={item.name} width={'60px'}/>
            <div className={styles['itemDetails']}>
                <p>{item.name}</p>
                <p>Item count: {item.itemCount}</p>
                <button className={styles['deleteBtn']}>Remove</button>
            </div>
            <div className={styles['itemPriceDetails']}>
                <div className={styles['itemCountAndPrice']}>
                    <p>Price: ${item.price}</p>
                </div>
                <p className={styles['totalItemPrice']}>Total: ${item.totalPrice}</p>
            </div>
        </li>
    )
}

export default CartItem;