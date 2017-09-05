import React from 'react';
import ReactDOM from 'react-dom';


// routing related
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// redux store related imports
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { autoRehydrate, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import reducer from './reducers';

// websocket related
import io from 'socket.io-client';

// Styles
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import './index.css';

// Containers
import Blayk from './containers/Blayk/'

// Views
import Login from './views/Login/';
import Register from './containers/RegisterContainer/';

import registerServiceWorker from './registerServiceWorker';

import config from './config';

// TODO: move this to seperate file
const store = compose(
    applyMiddleware(thunk),
    autoRehydrate()
)(createStore)(reducer);

persistStore(store);

// websocket connection
const socket = io.connect(config.API_PATH, { transports: ['websocket'], upgrade: false });
socket.on('connect', (x) => {
    store.dispatch({ type: 'HAS_SOCKET', socket })
});

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" name="Login Page" component={Login} />
                <Route exact path="/register" name="Register Page" component={Register} />
                <Route path="/" name="Home" component={Blayk} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// service worker offline first stuff
registerServiceWorker();
