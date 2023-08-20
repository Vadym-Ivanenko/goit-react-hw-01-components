import { TransactionHistory } from './transactionHistory/TransactionHistory';
import { TransactionHead } from './transactionHead/TransactionsHead';
import { Table } from './Transactions.styled';

export const Transactions = ({ items }) => {
  return (
    <Table>
      <TransactionHead />
      <TransactionHistory items={items} />
    </Table>
  );
};
