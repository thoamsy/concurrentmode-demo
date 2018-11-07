import React, { Component } from 'react';

const fakeAPI = value =>
  new Promise(r => {
    setTimeout(() => r(value), 1500);
  });

export default class Form extends Component {
  state = {
    context: '',
    loading: false,
  };

  ref = React.createRef();

  submit = event => {
    event.preventDefault();
    this.setState({ loading: true });
    fakeAPI(this.ref.current.value)
      .then(context => {
        this.setState({
          context,
        });
        this.setState({ loading: false });
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  };

  render() {
    return (
      <>
        <form onSubmit={this.submit}>
          <div className="field">
            <div
              className={`control ${this.state.loading ? 'is-loading' : ''}`}
            >
              <input
                ref={this.ref}
                className="input"
                type="text"
                placeholder="Normal loading input"
              />
            </div>
          </div>
          <p>{this.state.context}</p>
        </form>
      </>
    );
  }
}
