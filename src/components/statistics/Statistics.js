import { StatisticList } from './StatisticsList';
import { Title } from './StatisticsTitile';

export const Statistics = ({ data }) => {
  return (
    <section>
      <Title title={data} />
      <StatisticList statList={data} />
    </section>
  );
};
