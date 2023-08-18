import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { Friends } from './friends/Friends';
import { Transactions } from './transactions/Transactions';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics data={data} />
      <Friends friends={friends} />
      <Transactions items={transactions} />
    </div>
  );
};
