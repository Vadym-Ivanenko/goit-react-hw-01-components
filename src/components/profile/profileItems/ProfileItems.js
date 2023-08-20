import PropTypes from 'prop-types';
import {
  ProfileItem,
  ProfileList,
  DataDescr,
  Data,
} from './ProfileItems.styled';

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

ProfileItems.propTypes = {
  item: PropTypes.shape({
    stats: PropTypes.objectOf(PropTypes.number.isRequired),
  }),
};
