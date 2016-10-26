import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


const rootEl = document.getElementById('root');
ReactDOM.render(
  <div>
    <App />
  </div>,
  rootEl
);



if (module.hot) {
  module.hot.accept('./App', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./App').default;
    ReactDOM.render(
      <div>
         <NextApp />
      </div>,
      rootEl
    );
  });
}
