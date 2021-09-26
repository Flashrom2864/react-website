import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {CSSTransition} from 'react-transition-group';


<CSSTransition
  timeout={1000}
  classnames = 'container'
  unmountOnExit
>
    <p>Welcome</p>

</CSSTransition>

ReactDOM.render(<App />, document.getElementById('root'));