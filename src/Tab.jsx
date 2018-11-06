import React, { useState } from 'react';

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
        {children.map((tab, i) => (
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
            {children[i].props.children}
          </section>
        ))}
      </div>
    </>
  );
};

Tab.Panel = Panel;

export default Tab;
