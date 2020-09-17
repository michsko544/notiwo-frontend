import styled from 'styled-components';

export const InputStyled = styled.input`
    font-size: 14px;
    border: 2px solid ${({ color }) => color.font};
    color: ${({ color }) => color.font};
    width: 100%;
    background-color: ${({ color }) => color.alternative};
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    outline: none;
    padding: 12px 13px;

    &::placeholder {
    color: ${({ color }) => color.font};
    opacity: 0.6;
  }
`;

export const Label = styled.label`
    display:block;
    font-size: 14px;
    color: ${({ color }) => color};
    padding-bottom: 4px;
`;