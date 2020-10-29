import styled from 'styled-components';

export const Inner = styled.div`
  width:100%;
  display:flex;
  justify-content:center;
  flex-direction:column;

  @media(min-width:1024px){
    flex-direction:row;
    margin-bottom:33px;
  }
`;

export const Image = styled.img`
  width: 120px;
  height:120px;
  object-fit:cover;
  object-position: center;
  margin-left:auto;
  margin-right:auto;
  border-radius:50%;

  @media(min-width:1024px){
    width: 140px;
    height:140px;
  }
`;

export const TextWrapper = styled.div`
margin: 12px auto;
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  
  @media(min-width:1024px){
    margin-left: 22px;
  }
`;

export const Rate = styled.div`
    width:fit-content;
    margin-right:auto;
    margin-left: auto;
    @media(min-width:1024px){
        margin:unset;
    }

`;

export const Name = styled.h5`
    font-size: 18px;
    font-weight: normal;
    text-align:center;
    width:100%;
    color: ${({mode})=>mode.font};

    @media(min-width:1024px){
        font-size: 36px;
        font-weight:600;
        text-align:left;
    }
`;