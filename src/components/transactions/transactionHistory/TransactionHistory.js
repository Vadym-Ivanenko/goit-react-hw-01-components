import PropTypes from 'prop-types';
import { Item, ItemRow } from './TransactionHistory.styled';

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

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
