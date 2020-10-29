import styled from 'styled-components';


export const ControlPanelStyled = styled.div`
  width:100%;
  display:flex;
  flex-direction: column;


`;

export const ControlPanelItemStyled = styled.div`
    font-size: 14px;
    font-weight: 600;
    margin-right: 25px;
    padding-bottom: 3px;
    cursor: pointer;
    -webkit-user-select: none;  
    -moz-user-select: none;    
    -ms-user-select: none;      
    user-select: none;
    color: ${({color})=>color};
    border-bottom: ${({selected, color})=>selected ? "2px solid "+color : "none" };
`;

ControlPanelItemStyled.defaultProps = {
  selected: false,
  color: "#363B46",
}

export const ControlPanelRowStyled = styled.div`
    display:flex;
    flex-direction: row;
    overflow-x:auto;
    white-space:nowrap;
    width:100%;
    padding-bottom: 9px;

    & > div:last-child,
    & > *:last-child > div{
    margin-right:0;
  }
`;

