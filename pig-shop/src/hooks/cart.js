import { useCallback } from 'react';
import { useCartContext } from '../context/cartContext';

export const useCart = () => {
  const { cartState, setCartState } = useCartContext();

  const handleAddToCart = useCallback((id) =>
    setCartState((oldState) => [...oldState, { id }])
  );

  const handleDeleteFromCart = useCallback((selectedId) => {
    const newState = cartState.filter((item) => item.id !== selectedId);
    setCartState(newState);
  });

  return [handleAddToCart, handleDeleteFromCart];
};
