import React from 'react';
import ReactDOM from 'react-dom';

import './style.scss';

const App = ()=>{
    return (
        <div><h1>Hello React!</h1></div>
    );
}

ReactDOM.render(
    <App />, document.getElementById('app')
);