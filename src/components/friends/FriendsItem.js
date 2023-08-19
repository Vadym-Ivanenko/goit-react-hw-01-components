import { Item, List, Online } from './friends-styled/FriendsItem.styled';

export const FriendsItem = ({ friends }) => {
  return (
    <Item>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <List key={id}>
          <Online $online={isOnline}>{isOnline}</Online>
          <img src={avatar} alt="User avatar" width="48" />
          <p>{name}</p>
        </List>
      ))}
    </Item>
  );
};
