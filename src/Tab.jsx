import React, { Component } from 'react';

const Panel = ({ labelName, children, onClick, isActive }) => (
  <li className={isActive ? 'is-active' : ''}>
    <a onClick={onClick} href="#">
      {labelName}
    </a>
  </li>
);

class Tab extends Component {
  static Panel = Panel;
  state = {
    current: 0,
  };

  onClickTabPanel = i => () => {
    console.log(i);
    this.setState({
      current: i,
    });
  };

  render() {
    const { children } = this.props;
    return (
      <div className="tabs">
        <ul>
          {React.Children.map(children, (tab, i) =>
            React.cloneElement(tab, {
              onClick: this.onClickTabPanel(i),
              isActive: this.state.current === i,
            })
          )}
        </ul>
      </div>
    );
  }
}

export default Tab;
