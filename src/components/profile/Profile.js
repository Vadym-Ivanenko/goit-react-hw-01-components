import { Description } from './profileDescription/ProfileDescription';
import { ProfileItems } from './profileItems/ProfileItems';
import { Wrapper } from './Profile.styled';

export const Profile = ({ user }) => {
  return (
    <Wrapper key={user.username}>
      <Description descr={user} />
      <ProfileItems item={user} />
    </Wrapper>
  );
};
