import {createSlice} from '@reduxjs/toolkit';
import {Products} from '../../models/products';

interface FavoriteState {
  favoriteProducts: Products[];
}

const initialState: FavoriteState = {
  favoriteProducts: [],
};

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favoriteProducts.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favoriteProducts = state.favoriteProducts.filter(
        user => user.id !== action.payload,
      );
    },
  },
});

export const {addFavorite, removeFavorite} = favoriteSlice.actions;

export default favoriteSlice.reducer;
