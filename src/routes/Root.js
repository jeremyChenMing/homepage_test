
import React from 'react';
import {ReactDOM} from 'react-dom';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
// import { Router, Route, Link, IndexRoute } from 'react-router';
// import { hashHistory, browserHistory, useRouterHistory } from 'react-router';
import {
  HashRouter as Router,
  Route,   // 这是基本的路由块
  Link,    // 这是a标签
  Switch,   // 这是监听空路由的
  Redirect, // 这是重定向
  Prompt,   // 防止转换
} from 'react-router-dom'

import Nav from '../container/Nav';
import Hello from '../container/Hello';
import Other from '../container/Other';

class Root extends React.Component {
	constructor(props) {
		super(props);
		
	}
	render() {
		const {children,history} = this.props;
		return(
			<Provider store={this.props.store}>
				<Router>
					<div>
						<ul>
					        <li><Link to="/">Home</Link></li>
					        <li><Link to="/other">Other</Link></li>
					        <li><Link to="/about/987870jjdk19">About</Link></li>
				        </ul>
				     	<Route exact path="/" component={Nav} />
				     	<Route path="/other" component={Other}/>
				     	<Route path="/about/:id" component={Hello}/>
					</div>
				</Router>
			</Provider>
		)
	}
}
export default Root;