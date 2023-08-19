import { FriendsItem } from './FriendsItem';
import { Wrapper } from './friends-styled/Friensd.styled';

export const Friends = ({ friends }) => {
  return (
    <Wrapper>
      <FriendsItem friends={friends} />
    </Wrapper>
  );
};
