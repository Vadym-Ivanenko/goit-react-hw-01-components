import {
  StatisticsItem,
  Statisticslist,
  Label,
  Percentage,
} from './statistics-styled/StatisticsList.styled';

export const StatisticList = ({ statList }) => {
  return (
    <StatisticsItem>
      {statList.map(({ id, label, percentage }) => (
        <Statisticslist key={id}>
          <Label>{label}</Label>
          <Percentage>{percentage}%</Percentage>
        </Statisticslist>
      ))}
    </StatisticsItem>
  );
};
