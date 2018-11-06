import React from 'react';

export default function Text() {
  return (
    <article>
      <h1>Concurrent Mode</h1>
      <p>
        异步模式可以大大得提升用户的体验和性能，但是这无形中也对开发者带来了压力。
        因为太多的现有组件存在生命周期过时的问题，可能会使异步模式下出现一些莫名其妙的
        bug。
      </p>
    </article>
  );
}
