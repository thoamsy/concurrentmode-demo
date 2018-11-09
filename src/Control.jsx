import React, { useState } from 'react';
import { switchDelay } from './delayTime';

const NetWorkControl = () => {
  const [isFast, setNetwork] = useState(false);

  const onTagClick = () => {
    setNetwork(!isFast);
    switchDelay();
  };
  return (
    <span
      className={`tag ${isFast ? 'is-primary' : 'is-danger'}`}
      onClick={onTagClick}
    >
      {isFast ? 'Fast' : 'Slow'} Network
    </span>
  );
};

const ModeChoose = () => {
  const [sync, setSync] = useState(true);
  const [async, setAsync] = useState(false);

  const toggleSync = () => {
    const syncRoot = document.querySelector('#sync-root');
    syncRoot.style.display = sync ? 'none' : 'block';
    setSync(!sync);
  };

  const toggleAsync = () => {
    const asyncRoot = document.querySelector('#root');
    asyncRoot.style.display = async ? 'none' : 'block';
    setAsync(!async);
  };

  return (
    <div className="tags has-addons">
      <span
        onClick={toggleSync}
        className={`tag ${sync ? 'is-info' : 'is-dark'}`}
      >
        S
      </span>
      <span
        onClick={toggleAsync}
        className={`tag ${async ? 'is-warning' : 'is-white'}`}
      >
        A
      </span>
    </div>
  );
};

const Control = () => (
  <>
    <NetWorkControl />
    <ModeChoose />
  </>
);

export default Control;
