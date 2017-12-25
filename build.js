// todo

const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('./packs/app/index');

const html = ReactDOMServer.renderToString(React.createElement(App, null));

console.log(html);
