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
