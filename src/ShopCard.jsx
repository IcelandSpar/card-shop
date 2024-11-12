import styles from './ShopCard.module.css';

function ShopCard({card, indx}) {


    if((card["tcgplayer"] != undefined) && (card != undefined) && (card["images"]["large"] != undefined) && (card["images"] != undefined) && (card["tcgplayer"]["prices"] != null || undefined)) {
        return (
            <div className={`${styles['cardBackgroundGradient']} cardBackgroundGradient`}>
                <li key={indx} className={`${styles['cardContainer']} .cardContainer`}>
                    <img src={card["images"]["large"]} alt={card.name} className={`${styles["cardImg"]} cardImg${indx}`}/>
                    <p className={styles['font']}>{card.name}</p>
                    <p>{card.rarity == null || card.rarity == undefined ? 'Rarity missing' : card.rarity}</p>
                    <p>${Object.values(card["tcgplayer"]["prices"])[0]['market']}</p>
                </li>
            </div>
            )
    }

    

}

export default ShopCard;