import styles from './CardModalContent.module.css';
import { useState } from 'react';

function CardModalContent({card, handleClose}) {
    const [itemCount, setItemCount] = useState(0);

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
                    <img src={card["images"]["large"]} alt={card.name} className={styles['cardImage']}/>
                </div>
                <div className={styles['cardInfoAndPurchase']}>
                    <div className={styles['cardInfoContainer']}>
                        <h3>{card.name}</h3>
                        <p>Rarity: {card.rarity == null || card.rarity == undefined ? 'Rarity missing' : card.rarity}</p>
                        <p className={styles['cardPrice']}>${Object.values(card["tcgplayer"]["prices"])[0]['market']}</p>
                    </div>
                    <div className={styles['cardShoppingInterface']}>
                        <div className={styles['cardCountCont']}>
                            <button onClick={decrementItemCount} className={styles['decremCountBtn']}>-</button>
                            <p>{itemCount}</p>
                            <button onClick={addItemCount} className={styles['addCountBtn']}>+</button>
                        </div>
                        <button className={styles['addToCartBtn']}>Add to Cart</button>
                    </div>
                </div>
                <div onClick={handleClose} className={styles['closeBtn']}>X</div>
            </div>
        </section>
    )
}
export default CardModalContent;