import styles from "./HeaderNav.module.css";

function HeaderNav({ shoppingCartCount }) {
  return (
    <header className={styles["header"]}>
      <nav>
        <ul>
          <li>Logo</li>
          <li>
            <button>Shop</button>
          </li>
        </ul>
        <ul>
          <li>
          {shoppingCartCount != 0 ? (<div className={styles["cartCount"]}><p className={styles["countInCircle"]}>{shoppingCartCount}</p></div>) : null}
            
            <button>Cart</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderNav;
