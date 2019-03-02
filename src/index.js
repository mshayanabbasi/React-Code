import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import App1 from './components/User/App1'
import * as serviceWorker from './serviceWorker';
import Clock from './components/Clock/Clock'
import Greeting from './components/MyComponent/Greeting'
import MyComponent from './components/MyComponent/MyComponent'
import Greeting from './LoginControl/Greeting'
import LoginControl from './LoginControl/LoginControl'
import MailBox from './LoginControl/MailBox'
import messages from './LoginControl/MailBox'
import Page from './LoginControl/Page'
ReactDOM.render(<Clock />, document.getElementById('root'))
ReactDOM.render(<App1 />, document.getElementById('root'));
ReactDOM.render(<MyComponent />, document.getElementById('root'))
ReactDOM.render(<App title="Relevant Persons"/>, document.getElementById('root'));
ReactDOM.render(<Greeting isLoggedIn={true}/>, document.getElementById('root'));
ReactDOM.render(<LoginControl />, document.getElementById('root'));
ReactDOM.render(<MailBox unreadmessages={messages}/>, document.getElementById('root'));
ReactDOM.render(<Page />, document.getElementById('root'))




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
