import { useContext, useEffect, useState } from 'react';
import CartContext from './CartContext.jsx';
import ShopCard from './ShopCard.jsx';
import styles from './Shop.module.css';

function Shop() {
    const {cartItems} = useContext(CartContext);
    const [cardData, setCardData] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:5000/', {mode: "cors"})
            .then((response) => response.json())
            .then((response) => setCardData(prev => response.data.filter((value) => (value["tcgplayer"] != undefined) && (value != undefined) && (value["images"]["large"] != undefined) && (value["images"] != undefined) && (value["tcgplayer"]["prices"] != null || undefined))))
            .catch((error) => console.log(error));

    },[])

    const floatingCard = (element, ind) => {
        element.addEventListener('mouseout', (e) => {
            document.querySelector(`.cardImg${ind}`).style.transform = `perspective(400px) scale(1) rotateX(${0}deg) rotateY(${0}deg) rotateZ(0deg)`;

    })

        element.addEventListener('mousemove', (e) => {
            document.querySelector(`.cardImg${ind}`).style.transform = `perspective(400px) scale(1.05) rotateX(${(1 - (e.offsetY - element.clientHeight) / element.clientWidth)}deg) rotateY(${(e.offsetX - element.clientWidth * 0.5) / 5}deg)`;
        })
    }

    const cardBackgroundGradient = document.querySelectorAll('.cardBackgroundGradient');

    cardBackgroundGradient.forEach((element, ind) => {

            floatingCard(element, ind)
        
        
    })



    return(
        <>
            <ul className={styles['unorderList']}>
                {cardData.map((card, indx)=> {
                    return (
                        <ShopCard key={indx} card={card} indx={indx}/>
                    )
                })}
            </ul>
    
        </>
    )
}

export default Shop;