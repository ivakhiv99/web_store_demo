import { FC } from 'react';
import { styled } from 'styled-components';

const ImageContainer = styled.div`
    width: 250px;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ProductImage = styled.img`
    max-width: 100%;
    max-height: 100%;
`;

interface IImage {
    src: string;
    alt: string;
}

const Image:FC<IImage> = ({src, alt}) => (
    <ImageContainer>
      <ProductImage src={src} alt={alt} />
    </ImageContainer>
);

export default Image;