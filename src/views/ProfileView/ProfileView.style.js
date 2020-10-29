import styled from 'styled-components';

export const ProfileViewGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 25px;

@media(min-width:1024px){
    grid-template-columns: 1.9fr 1fr;
    grid-column-gap:36px;
    grid-row-gap:15px;
}
`;