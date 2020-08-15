import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'; // createStoreはstoreを作成する為の関数。redux-thunkはミドルウェアなのでapplyMiddlewareで使用可能にする
import { Provider } from 'react-redux';// 作成したstoreを全コンポーネントに渡す為の機能をもつコンポーネント
import thunk from 'redux-thunk';

import './index.css';
import reducer from './reducers';
import EventsIndex from './components/events_index';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={ store }>
    <EventsIndex />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
