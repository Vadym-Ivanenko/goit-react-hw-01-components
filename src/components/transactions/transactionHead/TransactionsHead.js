import { HeadComponents } from './TransactionsHead.styled';
export const TransactionHead = () => {
  return (
    <thead>
      <tr>
        <HeadComponents>Type</HeadComponents>
        <HeadComponents>Amount</HeadComponents>
        <HeadComponents>Currency</HeadComponents>
      </tr>
    </thead>
  );
};
