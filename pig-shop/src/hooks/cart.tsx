import { useCallback } from 'react';
import { useCartContext } from '../context/cartContext';

export const useCart = () => {
  const { cartState, setCartState } = useCartContext();

  const handleAddToCart = useCallback(
    (id) => {
      setCartState((oldState: string[]) => [...oldState, { id }]);
    },
    [cartState]
  );

  const handleDeleteFromCart = useCallback(
    (selectedId) => {
      const newState = cartState.filter((item: object) => item.id !== selectedId);
      setCartState(newState);
    },
    [cartState]
  );

  return [handleAddToCart, handleDeleteFromCart];
};
