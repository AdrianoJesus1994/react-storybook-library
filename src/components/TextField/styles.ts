import Styled from 'styled-components';

export const Input = Styled.input`
    border: 0;
    border-bottom: solid 2px #3e3e3e;
    font-size: 14px;
    color: #333;
    padding: 5px;
    font-weight: 400px;
    transition: ease-in-out;
    animation: fade;

    &:focus {
        border-bottom: solid 2px darkorange;
        outline: none;
    }

    &:active {
        border: 0;
        outline: none;
    }
`;
