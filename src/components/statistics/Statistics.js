import { StatisticList } from './statisticsList/StatisticsList';
import { Title } from './statisticsTytle/StatisticsTitile';
import { SectionWrapper } from './Statistics.styled';

export const Statistics = ({ data, title }) => {
  return (
    <SectionWrapper>
      <Title title={title} />
      <StatisticList statList={data} />
    </SectionWrapper>
  );
};
