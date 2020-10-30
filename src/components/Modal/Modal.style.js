import styled from 'styled-components';

export const ModalContainer = styled.div`
    height: 100%;
    width: 100%;
    background-color: rgba(51, 51, 51, 0.35);
    display: flex;
    align-items: center;
    justify-content: center;
  
    &:hover {
      cursor: pointer;
    }
`;

export const ModalContent = styled.div`
    background-color: #fff;
    min-width: 480px;
    min-height: 200px;
    max-width: 100%;
    max-height: 100%;
    overflow: auto;
    padding: 45px 35px;
    box-shadow: 0px 0px 10px rgba(51, 51, 51, 0.5);

    &:hover {
      cursor: default;
    }

    @media(min-width:1024px){
      padding: 45px 60px;
    }
`;