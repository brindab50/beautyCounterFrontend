import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import reducer from './reducer'

let defaultState = {
  products: [],
  reviews: [],
  review: [],
  steps: [],
  startIndex: 0,
  product: null,
  productCategories: [],
  searchTerm: ''



}

let store = createStore(reducer, defaultState, applyMiddleware(thunk))



ReactDOM.render(
  <Provider store={store}>
    <Router>
    <App />
    </Router>
  </Provider>, document.getElementById('root'));