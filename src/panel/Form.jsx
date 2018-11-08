import React, { Component, createRef } from 'react';
import { delay } from '../delayTime';

const fakeAPI = value => delay().then(() => value);

export default class Form extends Component {
  state = {
    context: '',
    value: '',
    loading: false,
  };

  inputRef = createRef();

  componentDidMount() {
    this.fetchUseless();
    this.inputRef.current.focus();
  }

  onChange = ({ target }) => {
    this.setState({ value: target.value });
  };

  fetchUseless() {
    this.setState({ loading: true });
    fakeAPI(this.state.value || 'You know nothing')
      .then(context => {
        this.setState({
          context,
        });
        this.setState({ loading: false });
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  }

  submit = event => {
    event.preventDefault();
    this.fetchUseless();
  };

  render() {
    if (this.state.loading) return 'Loading…';
    return (
      <form onSubmit={this.submit}>
        <div className="field">
          <div className="control">
            <input
              ref={this.inputRef}
              value={this.state.value}
              onChange={this.onChange}
              className="input"
              type="text"
              placeholder="Normal loading input"
            />
          </div>
        </div>
        <p>{this.state.context}</p>
      </form>
    );
  }
}
