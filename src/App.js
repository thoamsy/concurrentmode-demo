import React, { Component, lazy } from 'react';
import Container from './Container';
import Tab from './Tab';

import Text from './panel/Text';
const Review = lazy(() => import('./panel/Review'));
const Form = lazy(() => import('./panel/Form'));

const { Panel } = Tab;

class App extends Component {
  render() {
    return (
      <Tab>
        <Panel labelName="Tab 1">
          <Text />
        </Panel>
        <Panel labelName="Tab 2">
          <Form />
        </Panel>
        <Panel labelName="Tab 3">
          <Review />
        </Panel>
      </Tab>
    );
  }
}

export default App;
