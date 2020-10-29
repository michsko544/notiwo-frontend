import styled from 'styled-components';

export const Inner = styled.div`
  width:100%;
  padding: 10px 15px;
  position: relative;
  display:flex;
  flex-direction:column;
  min-height: 116px;
  background-color: ${({mode})=>mode.alternative};
  border: ${({color, marked})=> marked ? "2px solid " + color.first : "none"};
  cursor:pointer;
`;

export const Icon = styled.button`
  width:24px;
  height: 24px;
  position: absolute;
  background:none;
  background-repeat: no-repeat;
  background-position: center;
  border:none;
  outline:none;
  right: 15px;
  bottom: 15px;
  cursor: pointer;
  color: ${({color})=>color};
`;

export const Title = styled.h4`
    width:100%;
    color: ${({mode})=>mode.font};
    font-weight: 600;
    font-size: 15px;
    margin-bottom: 3px;
`;

export const Status = styled.p`
    width:100%;
    color: ${({mode})=>mode.font};
    font-size: 15px;
    margin-bottom: 7px;
`;

export const Container = styled.div`
  display:grid;
  grid-template-columns:1fr;
  row-gap: 15px;
`;

export const UnderBox = styled.div`
  width:100%;
  height: 28px;
  background-color: ${({mode})=>mode.main};
  color: ${({mode})=>mode.font};
  border: ${({mode})=>mode.font+ " 1px solid"};
  font-size: 14px;
  padding: 7px 15px;
  display:flex;
  align-items:center;
`;

export const Button = styled.button`
  width:100%;
  background-color:inherit;
  border:none;
  height:100%;
  outline:none;
  color: ${({mode})=>mode.font};
  font-size: 14px;
  display:flex;
  justify-content: space-between;
  align-items:center;
  font-family: "Open Sans";
  cursor: pointer;
`;