import React, { Component } from 'react';

function lazyLoad(LazyComponent) {
  return class extends Component {
    static displayName = `Lazy(${Component.displayName})`;
    state = {
      hasLoaded: false,
      C: null,
    };

    componentDidMount() {
      if (lazyLoad.C) {
        return this.setState({ hasLoaded: true, C: lazyLoad.C });
      }
      LazyComponent().then(module => {
        const { default: C } = module;
        lazyLoad.C = C;
        this.setState({
          hasLoaded: true,
          C,
        });
      });
    }

    render() {
      const { C, hasLoaded } = this.state;
      if (!hasLoaded) return '🌀';
      return <C {...this.props} />;
    }
  };
}

lazyLoad.C = null;

export default lazyLoad;
