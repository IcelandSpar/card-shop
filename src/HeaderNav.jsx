import styles from "./HeaderNav.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import cartImg from "./assets/cart-img.svg";
import shopLogo from "./assets/trading.png";

function HeaderNav(props) {


  return (
    <header className={styles["head"]}>
      <nav className={styles["nav"]}>
        <ul className={styles["unorderedList"]}>
          {/* <a href="https://www.flaticon.com/free-icons/collection" title="collection icons">Collection icons created by Becris - Flaticon</a> */}
          <li className={styles["listItem"]}>
            <Link to='/'>
              <button className={styles["navBtn"]}>
                Home
              </button>
            </Link>
          </li>
          <li className={styles["listItem"]}>
            <Link to='/shop'>
              <button className={styles["navBtn"]}>
                Shop
              </button>
            </Link>
          </li>
        </ul>
        <li className={styles["listItem"]}>
            <Link to='/' style={{textDecoration: 'none'}}>
              <div className={styles['imageTitleCont']}>
                <img
                  className={styles['shopLogo']}
                  href="https://www.flaticon.com/free-icons/collection"
                  src={shopLogo}
                  width="60px"
                  height="60px"
                  title="collection icons"
                ></img>
                <h1 className={styles['storeTitle']}>Poké and Duel Emporium</h1>
              </div>
            </Link>
          </li>
        <ul className={styles["unorderedList"]}>
          <li className={styles["listItem"]}>
          {props.shoppingCartCount.length != 0 ? (
                <div className={styles["cartCount"]}>
                  <p className={styles["countInCircle"]}>
                  {
                    (props.shoppingCartCount).reduce((acc, currVal) => {
                      return acc + Number(currVal.itemCount)
                    }, 0)
                  }
                  </p>
                </div>
              ) : null}
            <button className={`${styles["navBtn"]} ${styles["cartBtn"]}`}>
              <img
                className={styles["cartImg"]}
                src={cartImg}
                alt="cart"
                width="25px"
                height="25px"
              ></img>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

HeaderNav.propTypes = {
  name: PropTypes.number,
};

export default HeaderNav;
