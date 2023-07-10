import { useFetch, useFetchMultiple } from '../hooks'
import { useEffect, useState } from "react";
import { useAppSelector } from '../../redux/store';
import { IProduct } from '../../types/Product';
import ShopingCartItem from '../ShopingCartItem';

const Cart = () => {
    const [cartItems, setCartItems] = useState<IProduct[]>([]);
    const cartDataFromStore = useAppSelector(state => state.cart);
    const urls = cartDataFromStore.map((productId) => `/products/${productId}`);
    const {responses, isLoading, error } = useFetchMultiple(urls);
    
    useEffect(() => {
        if(responses) {
            setCartItems(responses as IProduct[]);
        }
    }, [responses]);

    useEffect(() => {
        console.log({cartItems});
    }, [cartItems]);

    return (
        <div>
            {cartItems.map((product) => (
                <ShopingCartItem
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                />
            ))}
        </div>

    );
}

export default Cart;
