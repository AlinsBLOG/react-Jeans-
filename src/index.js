import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import Router from './router'
import store from './store'
import './statics/css/reset.css';
import './statics/css/border.css';
import './statics/iconfont/iconfont';
import './statics/js/rem';

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('root')
);