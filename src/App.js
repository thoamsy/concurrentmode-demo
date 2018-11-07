import React, { Component, Suspense, lazy, createContext } from 'react';
import Tab from './Tab';

import Text from './panel/Text';
const Review = lazy(() => import('./panel/Review'));
const Form = lazy(() => import('./panel/Form'));

const { Panel } = Tab;

export const WhichMode = createContext(null);

class App extends Component {
  render() {
    return (
      <WhichMode.Provider value={this.props.mode}>
        <h1 className="title">
          {this.props.mode === 1 ? 'Current' : 'Sync'} Mode
        </h1>
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
      </WhichMode.Provider>
    );
  }
}

export default App;
