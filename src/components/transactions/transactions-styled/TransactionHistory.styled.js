import styled from 'styled-components';

export const Item = styled.td`
  text-align: center;
  height: 30px;
  border: 1px solid grey;
`;

export const ItemRow = styled.tr`
  &:nth-child(2n) {
    background: lightgrey;
    border: 1px solid white;
  }
`;
