import { useContext } from 'react';
import SideBarContext from './SideBarContext.jsx';
import styles from './ShoppingCartSideBar.module.css';


function ShoppingCartSideBar() {

const {showSideBar, setShowSideBar} = useContext(SideBarContext);

if (showSideBar) {
    return (
        <>
        <div className={`${styles['sideBarBackground']} sideBarBackground`} onClick={(e) => {
            // 
            e.target.classList[1] == 'sideBarBackground' ? setShowSideBar(prev => false) : null;
        }}>
            <aside className={`${styles['sideBar']}`}>
                <button className={styles['closeBtn']} onClick={() => setShowSideBar(prev => false)}>X</button>
                <h3 className={styles['shoppingCartHeader']}>Your Shopping Cart</h3>
                <ul>

                </ul>
            </aside>
        </div>
        </>
    )
}
}

export default ShoppingCartSideBar;