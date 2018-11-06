import React, { Component } from 'react';
import Container from './Container';
import Tab from './Tab';
import lazyLoad from './lazyLoad';

import Text from './panel/Text';
// import Review from './panel/Review';
const Review = lazyLoad(() => import('./panel/Review'));

const { Panel } = Tab;
class App extends Component {
  render() {
    return (
      <Container>
        <Tab>
          <Panel labelName="Tab 1">
            <Text />
          </Panel>
          <Panel labelName="Tab 2">good for me</Panel>
          <Panel labelName="Tab 3">
            <Review />
          </Panel>
        </Tab>
      </Container>
    );
  }
}

export default App;
