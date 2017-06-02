
import React from 'react';
import {ReactDOM} from 'react-dom';
import { Button } from 'antd';
import { connect } from 'react-redux';
import cx from 'classnames';
import l from './main.less';
import {environment} from '../redux/actions/environment';

import {
  HashRouter as Router,
  Route,   // 这是基本的路由块
  Link,    // 这是a标签
  Switch,   // 这是监听空路由的
  Redirect, // 这是重定向
  Prompt,   // 防止转换
} from 'react-router-dom'


class Other extends React.Component {
	constructor(props) {
		super(props);
		
	}
	componentDidMount() {
		
	}
	Topic({match}) {
		return(
			<div>
			    <h3>{match.params.text}</h3>
			    <a href="#/">home</a>
			</div>
		)
	}
	render() {
		const { match } = this.props;
		return(
			<div>
				<h1>a  new  page</h1>
				<ul>
					<li><Link to={`${match.url}/rendering`}>get back</Link></li>
				</ul>
				<Route exact path={match.url} render={() => (
			      	<h3>Please select a topic.</h3>
			    )}/>
				<Route path={`${match.url}/:text`} component={this.Topic}/>	
			</div>
		)
	}
}

export default Other