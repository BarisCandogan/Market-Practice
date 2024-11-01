import {createSlice} from '@reduxjs/toolkit';
import {Products} from '../../models/products';
import {BasketItems} from '../../models/basketItems';

interface BasketState {
  basketProducts: BasketItems[];
}

const initialState: BasketState = {
  basketProducts: [],
};

const basketSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const existingProduct = state.basketProducts.find(
        item => item.brand === action.payload.brand,
      );
      if (existingProduct) {
        existingProduct.count += 1;
      } else {
        state.basketProducts.push({
          ...action.payload,
          count: 1,
        });
      }
    },
    removeFromBasket: (state, action) => {
      const productIndex = state.basketProducts.findIndex(
        item => item.brand === action.payload,
      );
      if (productIndex !== -1) {
        const product = state.basketProducts[productIndex];
        if (product.count > 1) {
          state.basketProducts[productIndex].count -= 1;
        } else {
          state.basketProducts.splice(productIndex, 1);
        }
      }
    },
  },
});

export const {addToBasket, removeFromBasket} = basketSlice.actions;

export default basketSlice.reducer;
