import { useCartContext } from '../context/cartContext';

export const useCart = () => {
  const { cartState, setCartState } = useCartContext();

  const handleAddToCart = (id) =>
    setCartState((oldState) => [...oldState, { id }]);

  const handleDeleteFromCart = (selectedId) => {
    const newState = cartState.filter((item) => item.id !== selectedId);
    setCartState(newState);
  };

  return [handleAddToCart, handleDeleteFromCart];
};
