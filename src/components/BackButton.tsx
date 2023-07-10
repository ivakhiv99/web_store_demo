import { FC } from 'react';
import { useNavigate  } from 'react-router-dom';
import { styled } from 'styled-components';

const Button = styled.button`
    width: 180px;
    
`

interface IBackButton {
    label?: string;
}

const BackButton:FC<IBackButton> = ({label}) => {
    const navigate = useNavigate ();

    const handleClick = () => {
        navigate(-1);
    };

    return (
        <Button onClick={handleClick}>
            {label || '< back to results'}
        </Button>
    );
}

export default BackButton;