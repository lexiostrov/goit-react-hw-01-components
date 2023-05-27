import PropTypes from 'prop-types';

import {
  Container,
  ListTitle,
  Title,
  ListBody,
  ListBodyItem,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => (
  <Container>
    <thead>
      <ListTitle>
        <Title>Type</Title>
        <Title>Amount</Title>
        <Title>Currency</Title>
      </ListTitle>
    </thead>

    <tbody>
      {items.map(el => (
        <ListBody key={el.id}>
          <ListBodyItem>{el.type}</ListBodyItem>
          <ListBodyItem>{el.amount}</ListBodyItem>
          <ListBodyItem>{el.currency}</ListBodyItem>
        </ListBody>
      ))}
    </tbody>
  </Container>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
