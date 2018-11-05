import React, { useState, useCallback, useMemo } from 'react';

const Panel = ({ labelName, children, onClick, isActive }) => (
  <li className={isActive ? 'is-active' : ''}>
    <a onClick={onClick} href="#">
      {labelName}
    </a>
  </li>
);

const Tab = props => {
  const [current, setCurrent] = useState(props.active || 0);

  const onClickTabPanel = i => () => {
    setCurrent(i);
  };

  const children = React.Children.toArray(props.children);
  console.log(children[current]);
  return (
    <>
      <div className="tabs">
        <ul>
          {children.map((tab, i) =>
            React.cloneElement(tab, {
              onClick: onClickTabPanel(i),
              isActive: current === i,
              key: i, // 这里用 i 问题不大
            })
          )}
        </ul>
      </div>
      <section className="content">{children[current].props.children}</section>
    </>
  );
};

Tab.Panel = Panel;

export default Tab;
