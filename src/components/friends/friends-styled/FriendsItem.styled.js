import styled from 'styled-components';

export const Item = styled.ul`
  margin: 0;
  padding: 15px 0;
  list-style: none;
`;

export const List = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 15px;
  padding: 10px;

  box-shadow: 5px 11px 18px -10px rgba(66, 68, 90, 0.88);
`;

export const Online = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;

  background-color: ${props => (props.$online ? 'green' : 'red')};
`;
