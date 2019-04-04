import React from 'react';
import ReactDOM from 'react-dom';
import routing from './RouterRoot';
import GraphqlClient from './GraphqlClient.jsx';

ReactDOM.render(<GraphqlClient/>, document.getElementById('app'));