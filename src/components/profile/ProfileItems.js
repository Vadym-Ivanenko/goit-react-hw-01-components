import {
  ProfileItem,
  ProfileList,
  DataDescr,
  Data,
} from './profile-styled/ProfileItems.styled';

export const ProfileItems = ({ item: { stats } }) => {
  return (
    <ProfileItem>
      <ProfileList>
        <DataDescr>Followers</DataDescr>
        <Data>{stats.followers}</Data>
      </ProfileList>
      <ProfileList>
        <DataDescr>Views</DataDescr>
        <Data>{stats.views}</Data>
      </ProfileList>
      <ProfileList>
        <DataDescr>Likes</DataDescr>
        <Data>{stats.likes}</Data>
      </ProfileList>
    </ProfileItem>
  );
};
