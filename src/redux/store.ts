import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartReducer';
import { Middleware } from 'redux';
import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux';
import { act } from 'react-dom/test-utils';

const localStorageMiddleware:Middleware = store => next => action => {
    console.log('localStorageMiddleware:', action);

    // const userCart = JSON.parse(localStorage.getItem('cart') || '');
    // if(userCart) {
    //     localStorage.setItem('cart', JSON.stringify([...userCart, action.payload]))
    // } else {
    //     localStorage.setItem('cart', JSON.stringify([action.payload]))
    // }

    if(action.type === 'cart/addProductToCart') {
        const storedCartData = localStorage.getItem('cart');
        const userCart = storedCartData ? JSON.parse(storedCartData) : [];
        console.log({userCart});
        if(userCart) {
            console.log('[...userCart, action.payload]',  [...userCart, action.payload]);
            console.log('JSON.stringify([...userCart, action.payload]) = ',  JSON.stringify([...userCart, action.payload]));
            localStorage.setItem('cart', JSON.stringify([...userCart, action.payload]))
        } else {
            console.log('JSON.stringify([action.payload]) = ',  JSON.stringify([action.payload]));
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