import React, { useContext } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import { CartContext } from "../../store/CartProvider";
import CartItem from "./CartItem";

export default function Cart({ hideModal }) {
  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const hasItems = cartCtx.items.length > 0;

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map(({ id, name, amount, price, onRemove, onAdd }) => (
        <CartItem
          key={Math.random(Math.round()) * 100}
          name={name}
          amount={amount}
          price={price}
          onRemove={onRemove}
          onAdd={onAdd}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={hideModal}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button onClick={hideModal} className={styles["button--alt"]}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
}
