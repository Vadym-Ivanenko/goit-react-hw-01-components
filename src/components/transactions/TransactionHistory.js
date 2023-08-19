import { Item, ItemRow } from './transactions-styled/TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <tbody>
      {items.map(({ id, type, amount, currency }) => {
        return (
          <ItemRow key={id}>
            <Item>{type}</Item>
            <Item>{amount}</Item>
            <Item>{currency}</Item>
          </ItemRow>
        );
      })}
    </tbody>
  );
};
