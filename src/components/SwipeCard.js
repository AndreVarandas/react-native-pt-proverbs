import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'react-proptypes';
import styled from 'styled-components';
import SwipeCards from 'react-native-swipe-cards';

const handleRight = () => {
  // Do Something
};

const handleLeft = () => {
  // Do Something
};

const CardContainer = styled.View`
  flex: 1;
  margin: 0 50px;
  maxHeight: 300;
  borderRadius: 6px;
  backgroundColor: #ff00b8;
  justifyContent: center;
  alignItems: center;
`;

const CardText = styled.Text`
    padding: 0 20px;
    lineHeight: 40;
    textAlign: center;
    color: white;
    fontSize: 28;
    fontWeight: bold;
  `;

const Card = ({ text }) => (
  <CardContainer>
    <CardText>{text}</CardText>
  </CardContainer>
);

Card.propTypes = {
  text: PropTypes.string.isRequired,
};

const NoMoreCards = () => <Text>No More cards...</Text>;
export const SwipeCard = ({ cards }) => (
  <SwipeCards
    cards={cards}
    renderCard={cardData => <Card {...cardData} />}
    renderNoMoreCards={() => <NoMoreCards />}
    handleYup={() => handleRight()}
    handleNope={() => handleLeft()}
    showYup={false}
    showNope={false}
  />
);
