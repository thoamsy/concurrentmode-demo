import React, { Suspense, lazy, createContext } from 'react';
import styled, { css } from 'styled-components';

import Tab from './Tab';
import Text from './panel/Text';
const Review = lazy(() => import('./panel/Review'));
const Form = lazy(() => import('./panel/Form'));

const color = css`
  & .tabs li.is-active a {
    border-bottom-color: #ffdd57;
    color: #ffdd57;
  }
`;
const Container = styled.div`
  ${({ mode }) => (mode === 1 ? color : '')};
`;
const { Panel } = Tab;

export const WhichMode = createContext(null);

const App = ({ mode }) => {
  return (
    <Container mode={mode}>
      <WhichMode.Provider value={mode}>
        <h1 className="title">{mode === 1 ? 'Current' : 'Sync'} Mode</h1>
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
    </Container>
  );
};

export default App;
