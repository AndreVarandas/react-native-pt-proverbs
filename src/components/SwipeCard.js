import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'react-proptypes';
import styled from 'styled-components';
import SwipeCards from 'react-native-swipe-cards-deck';

const handleRight = () => {
  // Do Something
};

const handleLeft = () => {
  // Do Something
};

const CardContainer = styled.View`
  flex: 1;
  margin: 0 50px;
  maxheight: 300;
  borderradius: 6px;
  backgroundcolor: #ff00b8;
  justifycontent: center;
  alignitems: center;
`;

const CardText = styled.Text`
  padding: 0 20px;
  lineheight: 40;
  textalign: center;
  color: white;
  fontsize: 28;
  fontweight: bold;
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
    renderCard={(cardData) => <Card {...cardData} />}
    renderNoMoreCards={() => <NoMoreCards />}
    handleYup={() => handleRight()}
    handleNope={() => handleLeft()}
    showYup={false}
    showNope={false}
  />
);
