import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../store/CartProvider";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";

export default function HeaderCartButton({ showModal }) {
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const [btnAnimation, setBtnAnimation] = useState(false);

  const numberOfOrders = items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);

  const btnClass = `${styles.button} ${btnAnimation ? styles.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnAnimation(true);

    const timer = setTimeout(() => {
      setBtnAnimation(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button onClick={showModal} className={btnClass}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfOrders}</span>
    </button>
  );
}
