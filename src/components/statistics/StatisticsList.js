import PropTypes from 'prop-types';
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

StatisticList.propTypes = {
  statList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
