import { TransactionHistory } from './TransactionHistory';
import { TransactionHead } from './TransactionsHead';
import { Table } from './transactions-styled/Transactions.styled';

export const Transactions = ({ items }) => {
  return (
    <Table>
      <TransactionHead />
      <TransactionHistory items={items} />
    </Table>
  );
};
