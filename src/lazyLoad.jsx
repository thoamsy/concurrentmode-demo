import React, { useState, useEffect } from 'react';

function lazyLoad(path) {
  let Component = null;
  function LazyComponent(props) {
    const [lazy, setLazy] = useState({ C: null });

    useEffect(() => {
      if (Component) {
        return setLazy({ C: Component });
      }
      path().then(module => {
        const { default: C } = module;
        Component = C;
        setLazy({ C: Component });
      });
    }, []);

    if (lazy.C) {
      return React.createElement(lazy.C, props);
    }
    return '🌀';
  }
  return LazyComponent;
}

export default lazyLoad;
