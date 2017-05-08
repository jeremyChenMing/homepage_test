
import React from 'react';
import {ReactDOM} from 'react-dom';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
// import { Router, Route, Link, IndexRoute } from 'react-router';
// import { hashHistory, browserHistory, useRouterHistory } from 'react-router';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Nav from '../container/Nav';
import Hello from '../container/Hello';

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
					    	<ul>
						        <li><Link to="/">Home</Link></li>
						        <li><Link to="/about/987870jjdk19">About</Link></li>
						      </ul>
					    </ul>
				     	<Route exact path="/" component={Nav}/>
				     	<Route path="/about/:id" component={Hello}/>	
					</div>
				</Router>
			</Provider>
		)
	}
}
export default Root;