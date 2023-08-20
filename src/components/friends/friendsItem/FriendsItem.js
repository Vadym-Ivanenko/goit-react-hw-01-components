import PropTypes from 'prop-types';
import { Online } from './FriendsItem.styled';

export const Friends = ({ persons: { isOnline, avatar, name } }) => {
  return (
    <>
      <Online $online={isOnline}>{isOnline}</Online>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </>
  );
};

Friends.propTypes = {
  persons: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
