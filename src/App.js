import React, { Component } from 'react';
import bulma from 'bulma';

class App extends Component {
  render() {
    return (
      <div className="App">
        <dialog id="favDialog" open>
          <form method="dialog" aria-hidden>
            <p>
              <label>
                Favorite animal:
                <select>
                  <option />
                  <option>Brine shrimp</option>
                  <option>Red panda</option>
                  <option>Spider monkey</option>
                </select>
              </label>
            </p>
            <menu>
              <button>Cancel</button>
              <button>Confirm</button>
            </menu>
          </form>
        </dialog>

        <menu>
          <button id="updateDetails">Update details</button>
        </menu>
      </div>
    );
  }
}

export default App;
