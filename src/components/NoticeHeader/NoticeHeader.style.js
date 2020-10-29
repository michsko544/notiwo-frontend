import styled from 'styled-components';

export const Image = styled.img`
  width:100%;
  max-width: 800px;
  object-position: center;
  object-fit: cover;
`;

export const Inner = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
`

export const Break = styled.div`
    content:"";
    padding: 5px;
`