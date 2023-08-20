import styled from 'styled-components';

export const ProfileItem = styled.ul`
  width: 100%;
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;

  background-color: rgba(0, 0, 0, 0.08);
`;

export const ProfileList = styled.li`
  padding: 12px;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 83px;
  border: 1px solid lightgrey;
`;

export const Data = styled.span`
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 1;
`;

export const DataDescr = styled.span`
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: grey;
`;
