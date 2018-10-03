import proverbios from 'proverbios-portugueses';
import React from 'react';
import { StatusBar, SafeAreaView, Platform } from 'react-native';
import styled from 'styled-components';

import { shuffle } from './src/util';
import { SwipeCard } from './src/components/SwipeCard';

const paddingTop = Platform.OS === 'ios' ? 0 : StatusBar.currentHeight;

const TitleContainer = styled.View`
  justify-content: space-around;
  align-items: center;
`;

const AppTitlePT = styled.Text`
  color: black;
  fontSize: 30;
  fontWeight: bold;
`;

const AppTitleEN = styled.Text`
  fontSize: 20;
  color: dimgray;
`;

const Wrapper = styled.View`
  flex: 1;
  alignItems: center;
  justifyContent: center;
`;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { proverbs: [] };
  }

  componentWillMount() {
    const proverbs = shuffle(proverbios.all());
    const proverbsText = proverbs.map(proverb => ({ text: proverb }));
    this.setState({ proverbs: proverbsText });
  }

  render() {
    const { proverbs } = this.state;
    return (
      <SafeAreaView style={{ flex: 1, paddingTop }}>
        <Wrapper>
          <TitleContainer>
            <AppTitlePT>Provérbios Portugueses</AppTitlePT>
            <AppTitleEN>Portuguese Proverbs</AppTitleEN>
          </TitleContainer>
          <SwipeCard cards={proverbs} />
        </Wrapper>
      </SafeAreaView>
    );
  }
}
