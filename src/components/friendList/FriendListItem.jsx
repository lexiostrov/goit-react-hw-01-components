import PropTypes from 'prop-types';
import { Status, Name, Item } from './FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <Item>
    <Status isOnline={isOnline} />
    <img src={avatar} alt={name} width="48" />
    <Name eventType={isOnline}>{name}</Name>
  </Item>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
