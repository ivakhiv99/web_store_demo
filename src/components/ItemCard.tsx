import { FC } from 'react';
import { IProduct } from '../types/Product';
import { styled } from 'styled-components';
import Image from './Image';
import AddToCartButton from './AddToCartButton';

const ProductCart = styled.div`
    width: 350px;
    height: 350px;
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: solid 1px #C0C0C0;
    border-radius: 15px;
    margin: 0 15px;
`;

const ProductDescription = styled.div`
    text-align: left;
`;



// interface IProductCart extends Omit<IProduct, 'id'> {}

const ItemCard:FC<IProduct> = ({ id, title, price, image}) => (
    <ProductCart>
      <Image src={image} alt={title} />
      <ProductDescription>
          <h3>{title}</h3>
          <p>{price}</p>
          <AddToCartButton productId={id}/>
      </ProductDescription>
    </ProductCart>
);

export default ItemCard;
