import styles from "./Checkout.module.css";
import CartContext from "./CartContext.jsx";
import CartItem from "./CartItem.jsx";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Checkout() {
  const { cartItems, setCartItems } = useContext(CartContext);

  return (
    <section className={styles["checkoutContainer"]}>
      <h2 className={styles["checkoutHeader"]}>Your Pokemon Cards</h2>
      {cartItems.length == 0 ? (
        <p className={styles["checkoutNoItems"]}>
          You dont have cards in your cart!{" "}
          <Link className={styles["shopLink"]} to="/shop">
            Shop for cards!
          </Link>
        </p>
      ) : null}
      <div className={styles["checkoutCartListAndPayment"]}>
        <div className="checkoutCartItems">
          <ul className={styles["unorderedItemList"]}>
            {cartItems.map((item, index) => {
              return (
                <CartItem
                  key={index}
                  item={item}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  index={index}
                />
              );
            })}
          </ul>
          <div className={styles["totalContainer"]}>
            <h4 className={styles["overallTotal"]}>
              Total: $
              {Number(
                cartItems.reduce((acc, curr) => {
                  return acc + Number(curr.totalPrice);
                }, 0)
              ).toFixed(2)}
            </h4>
          </div>
        </div>
        {cartItems.length == 0 ? null : (
                    <form className={styles["checkoutPayment"]}>
                    <div className={styles["nameLabelAndInput"]}>
                      <div className={styles["firstNameFormSect"]}>
                        <label htmlFor="firstName">Name:</label>
                        <input
                          type="text"
                          id="firstName"
                          className={"nameInput"}
                          placeholder="First"
                          required
                        />
                      </div>
                      <div className={styles["lastNameFormSect"]}>
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" id="lastName" placeholder="Last" required/>
                      </div>
                    </div>
                    <div className={styles["emailLabelAndInput"]}>
                      <label htmlFor="email">Email:</label>
                      <input type="email" id="email" placeholder="myemail@email.com" required/>
                    </div>
                    <div className={styles["phoneLabelAndInput"]}>
                      <label htmlFor="phoneNumber">Phone Number:</label>
                      <input type="tel" id="phoneNumber" placeholder="123-456-7891" required/>
                    </div>
                    <div className={styles['cardNum']}>
                      <label htmlFor="cardNum">Card Number:</label>
                        <input type="text" placeholder="The funny numbers on your credit card" id='cardNum' required/>
                    </div>
                    <div className={styles["cvvAndZipCode"]}>
                      <div className={styles["cvv"]}>
                          <label htmlFor="cvv">CVV:</label>
                            <input type="text" id='cvv' required placeholder="Funny Numbers on back of card"/>
                      </div>
                      <div className={styles["zipCode"]}>
                        <label htmlFor="cardZipCode">Card Zip Code:</label>
                        <input type="text" id="cardZipCode" placeholder='42069' required/>
                      </div>
                    </div>
                    <div className={styles["addressLabelAndInput"]}>
                      <label htmlFor="address">Shipping Address:</label>
                      <input type="text" placeholder="123 Sesame Street" id="address" required/>
                    </div>
                    <div className={styles["restOfAddressInfo"]}>
                      <input type="text" placeholder='City' required/>
                      <input type="text" placeholder='Region' required/>
                      <input type="text" placeholder='Postal Code / Zip Code' required/>
                      <input type="text" placeholder='Country' required/>
                    </div>
                    <button className={styles['purchaseBtn']} onClick={(e) => {
                     
                    }}>Purchase</button>
                  </form>
        )}

      </div>
    </section>
  );
}

export default Checkout;
