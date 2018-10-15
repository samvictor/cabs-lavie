import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux'
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import App from './components/AppContainer';
import * as serviceWorker from './serviceWorker';
require('./index.scss');

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
