import user from '../user.json';
import data from '../data.json';
import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics data={data} />
    </div>
  );
};
