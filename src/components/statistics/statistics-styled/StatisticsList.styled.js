import styled from 'styled-components';

const randColor = () => {
  return (
    '#' +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')
  );
};

export const StatisticsItem = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  display: flex;
  justify-content: center;
  align-items: center;
  /* gap: 30px; */
`;

export const Statisticslist = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0;
  padding: 5px 0;
  width: 70px;

  background-color: ${props => randColor()};
`;

export const Label = styled.span`
  color: white;
  font-family: sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 0.8;
`;

export const Percentage = styled.span`
  color: white;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 0.8;
`;
