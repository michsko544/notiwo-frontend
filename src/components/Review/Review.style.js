import styled from 'styled-components';

export const Inner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position:relative;
  margin-bottom: 13px;
`;

export const Paragraph = styled.p`
  width:100%;
  font-size: 15px;
  color: ${({mode})=>mode.font};
  text-align:left;
  margin-bottom: 5px;
`;

export const LineWithRate = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items:center;
    width:100%;
    font-size: 15px;
    margin-bottom: 5px;
    color: ${({mode})=>mode.font};
`;

export const Subrate = styled.div`

    display:flex;
    flex-direction: row;
    align-items: center;
    font-size: 15px;
    font-weight: 600;
    color: ${({color})=>color.first};
`;

export const Rate = styled.div`
  font-size: 24px;
  font-weight: 600;
  background: linear-gradient(100.8deg, ${({ color }) => color.second} 0%, ${({ color }) => color.first} 78.65%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: fit-content;
    margin:0 auto;
`;

export const RateWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    position: absolute;
    right: 0;
    bottom: 10px;
`;

export const RateTitle = styled.div`
    text-align:center;
    font-weight: 600;
    font-size: 15px;
    color: ${({mode})=>mode.mode};
`;

export const Icon = styled.img`
  height:22px;
  margin-left: 5px;
  color: ${({color})=>color.second};
`;