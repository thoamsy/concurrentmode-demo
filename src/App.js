import React, { Component, Suspense, lazy } from 'react';
import Container from './Container';
import Tab from './Tab';

import Text from './panel/Text';
const Review = lazy(() => import('./panel/Review'));
const Form = lazy(() => import('./panel/Form'));

const { Panel } = Tab;

class App extends Component {
  render() {
    return (
      <Container>
        <Tab>
          <Panel labelName="Tab 1">
            <Text />
          </Panel>
          <Panel labelName="Tab 2">
            <Suspense fallback="Loading…" maxDuration={300}>
              <Form />
            </Suspense>
          </Panel>
          <Panel labelName="Tab 3">
            <Review />
          </Panel>
        </Tab>
      </Container>
    );
  }
}

export default App;
