import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; // storeを作成する為の関数
import { Provider } from 'react-redux';// 作成したstoreを全コンポーネントに渡す為の機能をもつコンポーネント

import './index.css';
import reducer from './reducers';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
