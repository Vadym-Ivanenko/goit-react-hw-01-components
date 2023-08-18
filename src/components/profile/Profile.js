import { Description } from './ProfileDescription';
import { ProfileItems } from './ProfileItems';
import { Wrapper } from './Profile.styled';

export const Profile = ({ user }) => {
  return (
    <Wrapper key={user.username}>
      <Description descr={user} />
      <ProfileItems item={user} />
    </Wrapper>
  );
};
