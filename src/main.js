import React,{PropTypes} from 'react';
import {ReactDOM} from 'react-dom';
import { render } from 'react-dom';
import './less/index.less';
import Root from './routes/Root';
import createBrowserHistory from 'history/createBrowserHistory'

// import {groupBy} from 'lodash/collection';

import configureStore from './redux/configReducer';
let store=configureStore();


// import createHistory from 'history/createBrowserHistory';
// const history = createHistory() 



// 这是一个task分支任务

//牛提交了很多的东西 
console.log('hahaha',__dev__, typeof __dev__)







render(
	<Root store={store} />, 
	document.getElementById('root')
);





