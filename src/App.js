import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartShow, setCartShow] = useState(false);

  const showModalCartHandler = () => {
    setCartShow(true);
  };

  const hideModalCartHandler = () => {
    setCartShow(false);
  };

  return (
    <CartProvider>
      {cartShow && <Cart hideModal={hideModalCartHandler} />}
      <Header showModal={showModalCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
