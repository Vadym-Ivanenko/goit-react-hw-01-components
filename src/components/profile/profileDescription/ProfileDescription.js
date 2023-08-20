import PropTypes from 'prop-types';
import {
  DescriptionWrapper,
  Avatar,
  Text,
  TextUserName,
} from './ProfileDescription.styled';

export const Description = ({ descr: { avatar, username, tag, location } }) => {
  return (
    <DescriptionWrapper>
      <Avatar src={avatar} alt="User avatar" />
      <TextUserName>{username}</TextUserName>
      <Text>@{tag}</Text>
      <Text>{location}</Text>
    </DescriptionWrapper>
  );
};

Description.propTypes = {
  descr: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }),
};
