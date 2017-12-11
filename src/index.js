// for redux-saga

import 'babel-polyfill'; 
import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  hashHistory
} from 'react-router';

import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';

import reducer from './reducers/index';

import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
//  components
import Layout from './components/layout';
import { HomeContainer } from './components/home';
import { DetailContainer } from './components/detail';
import { AddContainer } from './components/add';
import { AddCommentContainer } from './components/add-comment';

//  css
import '../dist/css/style.css';

// Filestack API
filepicker.setKey("AvoVEaaisToKy4LmlrhEnz");

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f // connect to redux devtools
  )
);

sagaMiddleware.run(rootSaga);

// the 3 paths of the app
const routes = <Route component={Layout}>
  <Route path="/" component={HomeContainer} />
  <Route path="/detail/:id" component={DetailContainer} />
  <Route path="/add" component={AddContainer} />
  <Route path ="/addComment" component={AddCommentContainer} />
</Route>;


// add provider 
ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>{routes}</Router>
	</Provider>,
	document.getElementById('app')
);
