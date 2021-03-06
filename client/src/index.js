import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore,compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './store/Reducer/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store =createStore(reducer,composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
        
<Provider store={store}>
        <App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
