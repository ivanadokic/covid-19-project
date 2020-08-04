import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';//By including the Provider, we'll be able to access our Redux store and/or dispatch actions from any component we want, regardless of where it is on the component tree.
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers/rootReducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
))
//use the createStore method from redux, passing in the provided reducer to create a store


ReactDOM.render(
  <React.StrictMode>

    <Provider store={store}>

      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

//Use Provider from react-redux to wrap <App />, passing store as a prop to the Provider. This will give your components access to the store.

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
