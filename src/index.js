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
import Page404 from './views/Page404/';
import Page500 from './views/Page500/';

import registerServiceWorker from './registerServiceWorker';


// TODO: move this to seperate file
const store = compose(
    applyMiddleware(thunk),
    autoRehydrate()
)(createStore)(reducer);

persistStore(store);

// websocket connection
// console.log("path", API_PATH)
const socket = io.connect("http://localhost:3000", { transports: ['websocket'], upgrade: false });
console.log("socket in index", socket)
socket.on('connect', (x) => {
    console.log("socket in index in con", socket, "arg", x)
    store.dispatch({ type: 'HAS_SOCKET', socket })
});

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" name="Login Page" component={Login} />
                <Route exact path="/register" name="Register Page" component={Register} />
                <Route exact path="/404" name="Page 404" component={Page404} />
                <Route exact path="/500" name="Page 500" component={Page500} />
                <Route path="/" name="Home" component={Blayk} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// service worker offline first stuff
registerServiceWorker();
