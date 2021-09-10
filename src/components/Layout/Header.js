import React from "react";
import styles from "./Header.module.css";
import mealImg from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

export default function Header({ showModal }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Order Food</h1>

        <HeaderCartButton showModal={showModal} />
      </header>
      <div className={styles["main-img"]}>
        <img src={mealImg} alt="a table of delicious food" />
      </div>
    </>
  );
}
