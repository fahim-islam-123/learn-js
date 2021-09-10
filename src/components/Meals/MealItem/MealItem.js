import React, { useContext } from "react";
import { CartContext } from "../../../store/CartProvider";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

export default function MealItem({ name, description, price, id }) {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  };

  return (
    <li className={styles["meal-list"]}>
      <div>
        <h3 className={styles.meal}>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm onAddCart={addToCartHandler} id={id} />
      </div>
    </li>
  );
}
