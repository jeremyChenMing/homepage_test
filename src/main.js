import React,{PropTypes} from 'react';
import {ReactDOM} from 'react-dom';
import { render } from 'react-dom';
import cx from 'classnames';
import l from './main.less';
// import './css/Base.css';
// import {groupBy} from 'lodash/collection';
// import Root from './routers/Root';

// import configureStore from './redux/configReducer';
// let store=configureStore();


// import createHistory from 'history/createBrowserHistory';
// const history = createHistory() 

console.log('hha',__dev__, typeof __dev__)

class Hello  extends React.Component {
	constructor(props) {
		super(props);
		
	}
	render() {
		return(
			<div className={cx(l.box)}>
				hello world!!!123
			</div>
		)
	}
}





// render(
// 	<Root store={store}/>, 
// 	document.getElementById('root')
// );

render(
	<Hello />,
	document.getElementById('root')
)





