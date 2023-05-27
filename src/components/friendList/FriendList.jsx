import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { Container, Item, Status, Name } from './FriendList.styled';

export const FriendList = ({ friends }) => (
  <Container>
    {friends.map(el => (
      <Item key={el.id}>
        <Status isHide={el.isOnline}></Status>
        <img src={el.avatar} alt={el.name} width="48" />
        <Name eventType={el.isOnline}>{el.name}</Name>
      </Item>
    ))}
  </Container>
);

// export const FriendList = ({ friends }) => (
//   <Container>
//     {friends.map(el => (
//       <FriendList key={el.id}>
//         <Status isHide={el.isOnline}></Status>
//         <img src={el.avatar} alt={el.name} width="48" />
//         <Name eventType={el.isOnline}>{el.name}</Name>
//       </FriendList>
//     ))}
//   </Container>
// );

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
