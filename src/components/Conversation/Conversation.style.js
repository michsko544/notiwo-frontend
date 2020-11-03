import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  overflow-y: auto;
  min-height:100%;
`;

export const Message = styled.div`
  display:flex;
  width:100%;
  flex-direction:column;
  margin-bottom: 10px;
`;

export const MessageBox = styled.div`
  padding: 8px;
  display:flex;
  width:fit-content;
  flex-direction:${({me})=>me===true ? "row" : "row-reverse" };
  color: ${({mode, me} )=> me===true ? mode.alternative : mode.font };
  background-color: ${({mode, me} )=> me===true ? mode.font : mode.alternative };
  margin: ${({me})=>me===true ? "0 0 0 auto" : "0 auto 0 0" };
  -webkit-box-shadow: 1px 2px 6px -3px rgba(0, 0, 0, 0.45);
    -moz-box-shadow: 1px 2px 6px -3px rgba(0, 0, 0, 0.45);
    box-shadow: 1px 2px 6px -3px rgba(0, 0, 0, 0.45);
`;

export const MessageTime = styled.div`
  font-size:12px;
  color: ${({mode})=>mode.font};
  opacity:0.8;
  margin: ${({me})=>me===true ? "0 0 0 auto" : "0 auto 0 0" };
`;

export const Thumbnail = styled.img`
    border-radius:50%;
    width:40px;
    height:40px;
    margin: 0 5px;
`;

export const MessageText = styled.div`
  color:inherit;
  margin: 0 5px;
  font-size: 15px;
`;

