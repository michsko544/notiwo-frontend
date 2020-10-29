import styled from 'styled-components';

export const Text = styled.article`
    width:100%;
    margin: 16px auto;
    text-align:justify;
    font-size: 15px;
    color: ${({color})=>color.font};
`;

export const Inner = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
`;