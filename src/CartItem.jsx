import styles from './CartItem.module.css';


function CartItem({item, setCartItems, index, cartItems}) {
    
    const removeItemFromCart = () => {
        setCartItems(prev => {
            return prev.filter((item, currIndex) => index != currIndex)
        })
    }


    const addItemCount = () => {
        const newArr = [...cartItems];
        newArr[index] = {
            ...newArr[index],
            itemCount: cartItems[index]['itemCount'] + 1,
        }

        newArr[index] = {
            ...newArr[index],
            totalPrice: (Number(newArr[index]['itemCount']) * Number(newArr[index]['price'])).toFixed(2)
        }


        setCartItems(prev => [...newArr])
        if(newArr[index]['itemCount'] == '0' || newArr[index]['itemCount'] == 0) {
            removeItemFromCart()
        }

    }

    const decrementItemCount = () => {
        const newArr = [...cartItems];
        newArr[index] = {
            ...newArr[index],
            itemCount: cartItems[index]['itemCount'] - 1
        }

        newArr[index] = {
            ...newArr[index],
            totalPrice: (Number(newArr[index]['itemCount']) * Number(newArr[index]['price'])).toFixed(2)
        }

        setCartItems(prev => [...newArr])
        if(newArr[index]['itemCount'] == '0' || newArr[index]['itemCount'] == 0) {
            removeItemFromCart()
        }
    }

    return (
        <li className={styles['cartItemContainer']}>
            <div className={styles['itemQuantityDescAndNumber']}>
                <p>QTY</p>
                <p className={styles['itemCount']}>{item.itemCount}</p>
            </div>
            <img className={styles['itemImage']} src={item.imageUrl} alt={item.name} width={'60px'}/>
            <div className={styles['itemDetails']}>
                <p className={styles['itemName']}>{item.name}</p>
                <p>Price: ${item.price}</p>
                <div className={styles['itemCountChangeContainer']}>
                    <button className={styles['decrementBtn']} onClick={decrementItemCount}>-</button>
                    <p className={styles['quantityBtnsDisplay']}>{item.itemCount}</p>
                    <button className={styles['incrementBtn']} onClick={addItemCount}>+</button>
                </div>
                <button className={styles['deleteBtn']} onClick={removeItemFromCart}>Remove</button>
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