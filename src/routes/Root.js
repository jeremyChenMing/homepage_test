import React from 'react';
import {ReactDOM} from 'react-dom';
import { Provider } from 'react-redux';
import {
  HashRouter as Router,
  Route,   // 这是基本的路由块
} from 'react-router-dom';
import l from './Root.less';
import cx from 'classnames';

import Home from '../container/Home';
import Start from '../container/Start';

class Root extends React.Component {
	constructor(props) {
		super(props);
		
	}
	getRouter() {
		return(
			<Router>
				<div>
					<Route exact path="/" component={Start} />
					<Route path="/home" component={Home}/>	
				</div>
			</Router>
		)
	}
	render() {
		const {children,history} = this.props;
		return(
			<Provider store={this.props.store}>
				{this.getRouter()}
			</Provider>
		)
	}
}
export default Root;