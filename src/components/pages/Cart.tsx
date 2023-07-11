import { useFetchMultiple } from '../hooks'
import { useEffect, useState , useMemo} from "react";
import { clearCart } from '../../redux/cartSlice'; 
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { IProduct } from '../../types/Product';
import ShopingCartItem from '../ShopingCartItem';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BuyButton = styled.button`
    background-color: #63ffc7;
`;

const ClearCart = styled.button`
    background-color: #63ffc7;
`;

const Cart = () => {
    const [cartItems, setCartItems] = useState<IProduct[]>([]);

    const dispatch = useAppDispatch();
    const cartDataFromStore = useAppSelector(state => state.cart);
    const urls = useMemo(() => cartDataFromStore.map((productId) => `/products/${productId}`), [cartDataFromStore]);
    const {responses, isLoading, error } = useFetchMultiple(urls);
    
    useEffect(() => {
        if(responses) {
            setCartItems(responses as IProduct[]);
        }
    }, [responses]);

    const handleClearCart = () => dispatch(clearCart());

    return (
        <div>
            <ClearCart onClick={handleClearCart}>
                Clear cart
            </ClearCart>
            {cartItems.map((product) => (
                <ShopingCartItem
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                />
            ))}
            <Link to='/checkout'>
                <BuyButton>
                    Buy now!
                </BuyButton>
            </Link>

        </div>

    );
}

export default Cart;
