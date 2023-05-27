import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { Container } from './FriendList.styled';

export const FriendList = ({ friends }) => (
  <Container>
    {friends.map(friend => (
      <FriendListItem
        key={friend.id}
        avatar={friend.avatar}
        isOnline={friend.isOnline}
        name={friend.name}
      ></FriendListItem>
    ))}
  </Container>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
