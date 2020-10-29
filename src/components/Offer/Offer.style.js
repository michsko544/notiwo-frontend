import styled from 'styled-components';

export const Inner = styled.div`
  width:100%;
  margin-top:10px;
`;

export const Text = styled.p`
    font-size:15px;
    margin-bottom: 24px;
    width:100%;
    text-align:justify;
    color: ${({color})=>color.font};
`;


export const Price = styled.div`
  font-size: 18px;
  background: linear-gradient(100.8deg, ${({ color }) => color.second} 0%, ${({ color }) => color.first} 78.65%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: fit-content;
  font-weight:600;
  white-space:nowrap;
`;

export const PriceLabel = styled.div`
    color: ${({color})=>color.font};
    font-weight: 600;
    font-size: 18px;
    margin-right:  5px;
`;

export const PriceWrapper = styled.div`
  display:flex;
  width:fit-content;
  margin: 20px auto;
  flex-direction:row;
`;

