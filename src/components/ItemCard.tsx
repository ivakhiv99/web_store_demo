import { FC } from 'react';
import { IProduct } from '../types/Product';
import { styled } from 'styled-components';
import Image from './Image';

const ProductCart = styled.div`
    width: 350px;
    height: 350px;
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductDescription = styled.div`
    text-align: left;
`;



interface IProductCart extends Omit<IProduct, 'id'> {}

const ItemCard:FC<IProductCart> = ({ title, price, image}) => (
    <ProductCart >
      <Image src={image} alt={title} />
      <ProductDescription>
          <h3>{title}</h3>
          <p>{price}</p>
      </ProductDescription>
    </ProductCart>
);

export default ItemCard;
