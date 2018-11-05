import React, { Component } from 'react';
import Container from './Container';
import Tab from './Tab';

const { Panel } = Tab;
class App extends Component {
  render() {
    return (
      <Container>
        <Tab>
          <Panel labelName="Tab 1">234</Panel>
          <Panel labelName="Tab 2">good for me</Panel>
          <Panel labelName="Tab 3">hhh</Panel>
        </Tab>
      </Container>
    );
  }
}

export default App;
