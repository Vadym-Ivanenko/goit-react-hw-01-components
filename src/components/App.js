import user from '../components/data/user.json';
import data from '../components/data/data.json';
import friends from '../components/data/friends.json';
import transactions from '../components/data/transactions.json';
import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { FriendsList } from './friends/Friends';
import { Transactions } from './transactions/Transactions';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics data={data} />
      <FriendsList friends={friends} />
      <Transactions items={transactions} />
    </div>
  );
};
