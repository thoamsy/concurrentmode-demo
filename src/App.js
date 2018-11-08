import React, { Component, lazy } from 'react';
import styled, { css } from 'styled-components';

import Tab from './Tab';
import Text from './panel/Text';
const Review = lazy(() => import('./panel/Review'));
const Form = lazy(() => import('./panel/Form'));

const color = css`
  & .tabs li.is-active a {
    border-bottom-color: #ff3860;
    color: #ff3860;
  }
`;
const Container = styled.div`
  ${({ mode }) => (mode === 1 ? color : '')};
`;
const { Panel } = Tab;

class App extends Component {
  render() {
    return (
      <Container mode={this.props.mode}>
        <h1 className="title">
          {this.props.mode === 1 ? 'Current' : 'Sync'} Mode
        </h1>
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
      </Container>
    );
  }
}

export default App;
