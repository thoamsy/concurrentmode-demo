import React, { useState, useEffect } from 'react';

const Panel = ({ labelName, children, onClick, isActive }) => (
  <li className={isActive ? 'is-active' : ''}>
    <a onClick={onClick} href="#">
      {labelName}
    </a>
  </li>
);

const Tab = props => {
  const children = React.Children.toArray(props.children);
  const [current, setCurrent] = useState(props.active || 0);
  const [loadedTab, setTab] = useState([]);

  useEffect(
    () => {
      const tabs = loadedTab.slice();
      tabs[current] = children[current];
      setTab(tabs);
    },
    [current]
  );

  const onClickTabPanel = i => () => {
    setCurrent(i);
  };

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
      <div style={{ position: 'relative' }}>
        {loadedTab.map((tab, i) => (
          <section
            key={i}
            className="content"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              opacity: +(current === i),
            }}
            hidden={current !== i ? true : null}
          >
            {tab.props.children}
          </section>
        ))}
      </div>
    </>
  );
};

Tab.Panel = Panel;

export default Tab;
