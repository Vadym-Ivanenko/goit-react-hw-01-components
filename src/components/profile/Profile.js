import { Description } from './ProfileDescription';
import { ProfileItems } from './ProfileItems';

export const Profile = ({ user }) => {
  return (
    <div key={user.username}>
      <Description descr={user} />
      <ProfileItems item={user} />
    </div>
  );
};
