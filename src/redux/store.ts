import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartReducer';
import { Middleware } from 'redux';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

const localStorageMiddleware:Middleware = store => next => action => {
    console.log('localStorageMiddleware:', action);

    if(action.type === 'cart/addProductToCart') {
        const storedCartData = localStorage.getItem('cart');
        const userCart = storedCartData ? JSON.parse(storedCartData) : [];
        if(userCart) {
            localStorage.setItem('cart', JSON.stringify([...userCart, action.payload]))
        } else {
            localStorage.setItem('cart', JSON.stringify([action.payload]))
        }
    }

    const result = next(action);
    console.log('New State:', store.getState());
    return result;
  };

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    middleware: [localStorageMiddleware]
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;