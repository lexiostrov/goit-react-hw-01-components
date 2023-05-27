import PropTypes from 'prop-types';
import {
  Container,
  Photo,
  Description,
  NameUser,
  EmailUser,
  LocationUser,
  List,
  Item,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({ avatar, username, tag, location, stats }) => (
  <Container>
    <Description>
      <Photo src={avatar} alt="User avatar"></Photo>
      <NameUser>{username}</NameUser>
      <EmailUser>@{tag}</EmailUser>
      <LocationUser>{location}</LocationUser>
    </Description>

    <List>
      <Item>
        <Label>Followers</Label>
        <Quantity>{stats.followers}</Quantity>
      </Item>
      <Item>
        <Label>Views</Label>
        <Quantity>{stats.views}</Quantity>
      </Item>
      <Item>
        <Label>Likes</Label>
        <Quantity>{stats.likes}</Quantity>
      </Item>
    </List>
  </Container>
);
//***/

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
