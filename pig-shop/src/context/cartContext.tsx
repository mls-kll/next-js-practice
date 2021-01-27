import { createContext, useContext, useState } from 'react';
import React from 'react';

const CartContext = createContext({})

type CartContextProviderProps = {
  children: React.Component
}

type CartType = {
  cartState: string[]
};

const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartState, setCartState] = useState([]);
  const value = { cartState, setCartState }
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

const cartContext = () => {
  return useContext(CartContext);
}

export { CartContextProvider, cartContext as useCartContext};
