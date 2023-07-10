import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: number[] = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addProductToCart: (state, action: PayloadAction<number>) => [...state, action.payload],
        removeProductFromCart:  (state, action: PayloadAction<number>) => state.filter(item => item !== action.payload),
        clearCart: () => [],
    }
});

export const { addProductToCart, removeProductFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;


//TODO: rename this file to cartSlice