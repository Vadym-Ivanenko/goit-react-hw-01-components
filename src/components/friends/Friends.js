import { Friends } from './friendsItem/FriendsItem';
import { List, Item } from './Friensd.styled';

export const FriendsList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => {
        return (
          <Item key={friend.id}>
            <Friends persons={friend} />
          </Item>
        );
      })}
    </List>
  );
};
