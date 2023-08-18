export const StatisticList = ({ statList }) => {
  return (
    <ul>
      {statList.map(list => (
        <li key={list.id}>
          <span>{list.label}</span>
          <span>{list.percentage}%</span>
        </li>
      ))}
    </ul>
  );
};
