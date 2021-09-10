import React from "react";
import styles from "./CartItem.module.css";

export default function CartItem({ name, amount, price }) {
  return (
    <li className={styles["cart-item"]}>
      <div>
        <h3>{name}</h3>
        <div className={styles.summary}>
          <span className={styles.price}>{price.toFixed(2)}</span>
          <span className={styles.amount}>x {amount}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button>−</button>
        <button>+</button>
      </div>
    </li>
  );
}
