import styles from './CardModalContent.module.css';
import { useState, useContext } from 'react';
import CartContext from './CartContext';

function CardModalContent({card, handleClose, floatingCard, indx}) {
    const [itemCount, setItemCount] = useState(0);
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

    const floatingCards = (e) => {
        
        document.querySelector('.activeImageAnim').addEventListener('mouseout', (e) => {
            document.querySelector(`.activeImageAnim`).style.transform = `perspective(400px) scale(1) rotateX(${0}deg) rotateY(${0}deg) rotateZ(0deg)`;

    })

        document.querySelector('.activeImageAnim').addEventListener('mousemove', (e) => {
            document.querySelector(`.activeImageAnim`).style.transform = `perspective(400px) scale(1.05) rotateX(${(1 - (e.offsetY - e.clientHeight) / e.clientWidth)}deg) rotateY(${(e.offsetX - e.clientWidth * 0.5) / 5}deg)`;
        })
    }

    return (
        <section className={styles['modalOutline']}>
            <div className={styles['modalBackground']}>

                <div className={styles['cardContainer']}>
                    <img src={card["images"]["large"]} alt={card.name} className={`${styles['cardImage']} activeImageAnim`} onMouseEnter={(e) => {
                        floatingCards(e)
                    }}/>
                </div>
                <div className={styles['cardInfoAndPurchase']}>
                    <div className={styles['cardInfoContainer']}>
                        <div className={styles['nameAndSymbol']}>
                            <img className={styles['cardSymbolImage']} src={card['set']['images']['symbol']} alt="symbol" width='23px' height='23px'/>
                            <h3 className={styles['cardTitle']}>{card.name}</h3>
                        </div>
                        <p>Set: &nbsp;<u>{card['set']['name']}</u></p>
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
                            setCartItems([...cartItems,{poke: 'items'}])
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