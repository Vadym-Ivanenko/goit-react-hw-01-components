import styled from 'styled-components';

export const Online = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;

  background-color: ${props => (props.$online ? 'green' : 'red')};
`;
