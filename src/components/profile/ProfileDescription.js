export const Description = ({ descr: { avatar, username, tag, location } }) => {
  return (
    <div>
      <img src={avatar} alt="User avatar" />
      <p>{username}</p>
      <p>@{tag}</p>
      <p>{location}</p>
    </div>
  );
};
