import styled from 'styled-components';

export const Line = styled.div`
  width:100%;
  font-size: 15px;
  display:flex;
  font-weight:600;
  flex-direction: row;
  margin-bottom:9px;
  color:${({mode})=>mode.font};
`;

export const Switch = styled.div`
  color:${({mode})=>mode.font};
  display:flex;
  font-size: 15px;
  font-weight:600;
  flex-direction: row;
  margin: 0 4px;
`;

export const SwitchElement = styled.div`
  color:${({mode})=>mode.font};
  font-size: 15px;
  margin: 0 5px;
  font-weight:600;
  padding: 0 1px;
  padding-bottom: 2px;
  border-bottom: ${({selected,mode})=> selected ? "2px solid "+ mode.font : "none"};
  cursor: pointer;
`;

export const ArticleContainer = styled.div`
    @media(min-width:1024px){
    width:100%;
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 10%;
    }
`;