import React from 'react';
import { createRoot, render } from 'react-dom';
import 'bulma/css/bulma.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

createRoot(document.getElementById('root')).render(<App />);
render(<App />, document.getElementById('sync-root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
