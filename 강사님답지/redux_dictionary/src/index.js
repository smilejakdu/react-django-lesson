import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import store from 'store';

// 리덕스와 리액트앱 연결을 위한 Provider
import { Provider } from 'react-redux';

// 부트스트랩 사용을 위한 css 파일
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
