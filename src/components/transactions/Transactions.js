import { TransactionHistory } from './TransactionHistory';
import { TransactionHead } from './TransactionsHead';

export const Transactions = ({ items }) => {
  return (
    <table>
      <TransactionHead />
      <TransactionHistory items={items} />
    </table>
  );
};
