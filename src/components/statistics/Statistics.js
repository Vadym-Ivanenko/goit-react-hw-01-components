import { StatisticList } from './StatisticsList';
import { Title } from './StatisticsTitile';
import { SectionWrapper } from './Statistics.styled';

export const Statistics = ({ data }) => {
  return (
    <SectionWrapper>
      <Title title={data} />
      <StatisticList statList={data} />
    </SectionWrapper>
  );
};
