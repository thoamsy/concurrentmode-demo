import React, { useState } from 'react';
import { switchDelay } from './delayTime';

const Tag = () => {
  const [isFast, setNetwork] = useState(true);

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

const Control = () => (
  <>
    <Tag />
  </>
);

export default Control;
