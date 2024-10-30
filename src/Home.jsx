import { useContext, useEffect, useState } from "react";
import CartContext from "./CartContext.jsx";
import styles from "./Home.module.css";
import bunchOfCards from "./assets/bunch-of-cards.jpg";
import yuGiHoldingCard from "./assets/yu-gi-holding-card.jpg";
import fatPika from "./assets/fat-pika.jpg";
import dragonPokeCard from "./assets/dragon-poke-card.jpg";
import proppedYugiCard from "./assets/propped-yugi-card.jpg";
import holdingYugiCards from "./assets/holding-yugi-cards.jpg";
import chariSleeved from "./assets/chari-sleeved.jpg";

function Home() {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(1);
  const [prevPhotoIndx, setPrevPhotoIndx] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const homepagePhotos = [
    bunchOfCards,
    yuGiHoldingCard,
    fatPika,
    dragonPokeCard,
    proppedYugiCard,
    holdingYugiCards,
    chariSleeved,
  ];

  useEffect(() => {

    const photoIndxInt = autoPlay && setInterval(() => {


      prevPhotoIndx + 1 > homepagePhotos.length - 1
        ? setPrevPhotoIndx(0)
        : setPrevPhotoIndx((prev) => prev + 1);
      currentPhotoIndex + 1 > homepagePhotos.length - 1
        ? setCurrentPhotoIndex(0)
        : setCurrentPhotoIndex((prev) => prev + 1);

    }, 4000);

    return () => {

      clearInterval(photoIndxInt);

    };
  });

  // Photo by Erik Mclean: https://www.pexels.com/photo/card-collection-in-cases-9661256/
  // Photo by <a href="https://unsplash.com/@steven3466?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Steven Cordes</a> on <a href="https://unsplash.com/photos/a-pokemon-trading-card-sitting-on-top-of-a-table-8ng-g70XRbI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  // Photo by <a href="https://unsplash.com/@steven3466?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Steven Cordes</a> on <a href="https://unsplash.com/photos/a-close-up-of-a-card-on-a-table-V_XUEeakBKE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  // Photo by <a href="https://unsplash.com/@jovanvasiljevic?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jovan Vasiljević</a> on <a href="https://unsplash.com/photos/a-person-holding-a-card-in-their-hand-PPRTdaswJhM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  // Photo by <a href="https://unsplash.com/@jovanvasiljevic?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jovan Vasiljević</a> on <a href="https://unsplash.com/photos/a-pile-of-cards-sitting-on-top-of-a-table-MQ6FBsOImSU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  // Photo by <a href="https://unsplash.com/@rocinante_11?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Mick Haupt</a> on <a href="https://unsplash.com/photos/red-ceramic-mug-on-brown-wooden-table-KtTF68ZjBak?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  // Photo by <a href="https://unsplash.com/@jovanvasiljevic?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jovan Vasiljević</a> on <a href="https://unsplash.com/photos/a-person-holding-a-card-in-their-hand-LHErWMdsw5M?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

  return (
    <main className={styles["homeMain"]}>
      <section className={styles["imgAndDescriptCont"]}>
        <div className={styles["descriptContainer"]}>
          <h2 className={styles["descriptTitle"]}>We sell overpriced cards!</h2>
          <p className={styles["descriptPara"]}>
            ~Our customers have a 100% chance of pulling an energy!
          </p>
          <p>
            ~Ever since we started this scalping business, our sales have sky
            <em>rocketed!</em> (Go Team 🚀!).
          </p>
          <p className={styles["descriptPara"]}>
            ~All of our cards are rated with a grade of 1 (our warehouse had
            water damage).
          </p>
        </div>
        <div className={styles["imgCarousel"]}
        onMouseEnter={() => {
          setAutoPlay(false);
        }}
        onMouseLeave={() => {
          setAutoPlay(true);
        }}
        >
          <img
            className={`${styles["prevCardImg"]} prevCardImg`}
            src={homepagePhotos[prevPhotoIndx]}
          />
          {/* <img
            className={`${styles["cardsImages"]} cardImages`}
            src={homepagePhotos[currentPhotoIndex]}
            alt="Trading Cards"
          /> */}
        </div>
      </section>
    </main>
  );
}

export default Home;
