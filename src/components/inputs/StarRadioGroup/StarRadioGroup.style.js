import styled from 'styled-components';

export const StarRadioGroupStyled = styled.div`
   
   margin-bottom: 4px;
`;

export const Label = styled.label`
    display:block;
    font-size: 14px;
    color: ${({ color }) => color};
    padding-bottom: 4px;
`;

Label.defaultProps = {
  color: '#363B46',
}