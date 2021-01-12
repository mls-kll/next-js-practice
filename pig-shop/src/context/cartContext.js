import { createContext, useContext, useState } from 'react';

const CartContext = createContext()

export function CartContextProvider({children}) {
  const [cartState, setCartState] = useState([]);
  const value = { cartState, setCartState }
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export function useCartContext() {
  return useContext(CartContext);
}

// export { CartContext, CartContextProvider };