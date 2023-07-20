import { FC } from 'react';
import { styled } from 'styled-components';
import { useAppDispatch } from '../redux/store';
import { addProductToCart } from '../redux/cartSlice';

const Button = styled.button`
    width: 180px;
    height: 35px;
    background-color: #63ffc7;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`

interface IAddToCartButton {
    productId: number;
}

const AddToCartButton:FC<IAddToCartButton> = ({ productId }) => {
    const dispatch = useAppDispatch(); 

    const handleAddToCart = (event: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement> ) => {
        event.preventDefault();

        //Ideally here should be POST request to backend to save what user added to his cart
        //I'll just save this info in local storage for demo purposes
        alert(`product with id ${productId} added`);
        dispatch(addProductToCart({id: productId, quantity: 1}));
    }

    return (
        <Button onClick={handleAddToCart}>
            {'Add to cart'}
        </Button>
    );
}

export default AddToCartButton;