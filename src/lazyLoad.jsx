import React, { Component, useState, useEffect } from 'react';

function lazyLoad(path) {
  function LazyComponent(props) {
    const [lazy, setLazy] = useState({ hasLoaded: false, C: null });

    useEffect(() => {
      if (lazyLoad.C) {
        return setLazy({ hasLoaded: true, C: lazyLoad.C });
      }
      path().then(module => {
        const { default: C } = module;
        lazyLoad.C = C;
        setLazy({ hasLoaded: true, C: lazyLoad.C });
      });
    }, []);
    const { C, hasLoaded } = lazy;
    if (!hasLoaded) return '🌀';
    return <C {...props} />;
  }

  LazyComponent.displayName = `Lazy(${Component.displayName})`;
  return LazyComponent;
}

lazyLoad.C = null;

export default lazyLoad;
