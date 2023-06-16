import PropTypes from 'prop-types';
import { Container, List, Item, Label, Percentage } from './Statistics.styled';
import { getRandomHexColor } from '../randomColor/RandomColor';

export const Statistics = ({ title, stats }) => (
  <Container>
    {title && <h2>Upload stats</h2>}

    <List>
      {stats.map(el => (
        <Item
          style={{
            backgroundColor: getRandomHexColor(),
          }}
          key={el.id}
        >
          <Label>{el.label}</Label>
          <Percentage>{el.percentage}</Percentage>
        </Item>
      ))}
    </List>
  </Container>
);

getRandomHexColor();

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
