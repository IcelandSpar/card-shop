import styles from './CardModalContent.module.css';
import { useState, useContext } from 'react';
import CartContext from './CartContext';

function CardModalContent({card, handleClose, floatingCard, indx}) {
    const [itemCount, setItemCount] = useState(1);
    const {cartItems, setCartItems} = useContext(CartContext);
    const addItemCount = () => {
        setItemCount(prev => {
            return prev + 1
        })

    }

    const decrementItemCount = () => {
        setItemCount(prev => {
            if(prev > 0) {
                return prev - 1
            } else {
                return 0
            }
        })
    }



    return (
        <section className={styles['modalOutline']}>
            <div className={styles['modalBackground']}>

                <div className={styles['cardContainer']}>
                    <img src={card["images"]["large"]} alt={card.name} className={`${styles['cardImage']} activeImageAnim`}/>
                </div>
                <div className={styles['cardInfoAndPurchase']}>
                    <div className={styles['cardInfoContainer']}>
                        <div className={styles['nameAndSymbol']}>
                            <img className={styles['cardSymbolImage']} src={card['set']['images']['symbol']} alt="symbol" width='23px' height='23px'/>
                            <h3 className={styles['cardTitle']}>{card.name}</h3>
                        </div>
                        <div className={styles['setLogoAndName']}>
                            <p>Set: &nbsp;<u>{card['set']['name']}</u></p>
                            <img className={styles['setLogoImage']} src={card['set']['images']['logo']} alt="set logo"/>
                        </div>
                        <p>Artist: &nbsp;<u>{card.artist}</u></p>
                        <p>Rarity: &nbsp;<u>{card.rarity == null || card.rarity == undefined ? 'Rarity missing' : card.rarity}</u></p>
                        <p className={styles['flavorText']}>{card.flavorText ? card.flavorText : 'Description Missing (｡•́︿•̀｡)'}</p>
                        <p className={styles['cardPrice']}>${Number.parseFloat(Object.values(card["tcgplayer"]["prices"])[0]['market']).toFixed(2)}</p>
                    </div>
                    <div className={styles['cardShoppingInterface']}>
                        <div className={styles['cardCountCont']}>
                            <button onClick={decrementItemCount} className={styles['decremCountBtn']}>-</button>
                            <p>{itemCount}</p>
                            <button onClick={addItemCount} className={styles['addCountBtn']}>+</button>
                        </div>
                        <button className={styles['addToCartBtn']} onClick={()=> {
                            if(itemCount != 0) {
                                setCartItems([...cartItems,{
                                    name: `${card.name}`,
                                    price: `${Number.parseFloat(Object.values(card["tcgplayer"]["prices"])[0]['market']).toFixed(2)}`,
                                    itemCount: itemCount,
                                    totalPrice: `${(Number.parseFloat(Object.values(card["tcgplayer"]["prices"])[0]['market']).toFixed(2) * itemCount).toFixed(2)}`,
                                    imageUrl: `${card["images"]["large"]}`,
                                }])
                            }

                            console.log(cartItems);
                            handleClose()
                        }}>Add to Cart</button>
                    </div>
                </div>
                <div onClick={handleClose} className={styles['closeBtn']}>X</div>
            </div>
        </section>
    )
}
export default CardModalContent;