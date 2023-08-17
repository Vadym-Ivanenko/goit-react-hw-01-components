export const Profile = ({ user }) => {
  return (
    <div key={user.username}>
      <div className="description">
        <img src={user.avatar} alt="User avatar" />
        <p>{user.username}</p>
        <p>@{user.tag}</p>
        <p>{user.location}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span user="">{user.stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{user.stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
