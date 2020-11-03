import styled from 'styled-components';

export const ConversationViewContainer = styled.div`
  display: flex; 
  flex-direction:column; 
  min-height: calc(100vh - 100px); 
`;

export const Break = styled.div`
  content: "";
  padding: 8px;
`;

export const TextLine = styled.p`
    font-size:15px;
    margin-bottom: 2px;
    width:100%;
    text-align:left; 
    color: ${({mode})=>mode.font}
`;