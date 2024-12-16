import styles from './ShopCard.module.css';
import { useState } from 'react';
import CardModalContent from './CardModalContent.jsx';

function ShopCard({card, indx}) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpen = () => {
        setIsModalOpen(true);
    }

    const handleClose = () => {
        setIsModalOpen(false);
    }


    if((card["tcgplayer"] != undefined) && (card != undefined) && (card["images"]["large"] != undefined) && (card["images"] != undefined) && (card["tcgplayer"]["prices"] != null || undefined)) {
        return (
            <>
                {isModalOpen ? <div className={styles['modal']}>
                    <CardModalContent card={card} handleClose={handleClose}/>
                </div>: null}
                

                
                <div className={`${styles['cardBackgroundGradient']} cardBackgroundGradient`} onClick={handleOpen}>
                    <li key={indx} className={`${styles['cardContainer']} .cardContainer`}>
                        <img src={card["images"]["large"]} alt={card.name} className={`${styles["cardImg"]} cardImg${indx}`}/>
                        <p className={styles['font']}>{card.name}</p>
                        <p>{card.rarity == null || card.rarity == undefined ? 'Rarity missing' : card.rarity}</p>
                        <p>${Object.values(card["tcgplayer"]["prices"])[0]['market']}</p>
                    </li>
                </div>
            </>
            )
    }

    

}

export default ShopCard;