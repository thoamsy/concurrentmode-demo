import React, { Component } from 'react';

const delay = ms => new Promise(r => setTimeout(r, ms));

export default class Review extends Component {
  state = {
    loading: null,
  };

  componentDidMount() {
    this.setState({ loading: true });
    delay(3000).then(() => {
      this.setState({
        loading: false,
      });
    });
  }

  componentDidUpdate() {
    console.log('I am in.');
  }

  render() {
    const { loading } = this.state;
    if (loading === null) return null;

    if (loading) {
      return <b>Loading………</b>;
    }

    return (
      <div className="content">
        <ol className="is-lower-alpha">
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ol>
        <ol className="is-lower-roman">
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ol>
        <ol className="is-upper-alpha">
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ol>
        <ol className="is-upper-alpha">
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ol>
      </div>
    );
  }
}
