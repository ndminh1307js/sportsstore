import { ActionTypes } from './Types';

export const addToCart = (product, quantity = 1) => ({
  type: ActionTypes.CART_ADD,
  payload: {
    product,
    quantity,
  },
});

export const updateCartQuantity = (product, quantity) => ({
  type: ActionTypes.CART_UPDATE,
  payload: {
    product,
    quantity,
  },
});

export const removeFromCart = (product) => ({
  type: ActionTypes.CART_REMOVE,
  payload: product,
});

export const clearCart = () => ({
  type: ActionTypes.CART_CLEAR,
});
