import React from 'react';
import {ReactDOM} from 'react-dom';
import cx from 'classnames';
import l from './Index.less';

import {
  HashRouter as Router,
  Route,   // 这是基本的路由块
  Link,    // 这是a标签
  Switch,   // 这是监听空路由的
  Redirect, // 这是重定向
  Prompt,   // 防止转换
} from 'react-router-dom';

import Nav from '../components/Nav';
import Hello from '../components/Hello';
import Other from '../components/Other';
import Task from '../components/Task';
import Attendce from '../components/Attendce';


class Content extends React.Component {
	constructor(props) {
		super(props);
		
	}
	render() {
		const {match} = this.props;
		return(
			<div className={cx(l.content)}>
				<Route exact path={`${match.url}`} component={Nav} />
		     	<Route path={`${match.url}/other`} component={Other}/>
		     	<Route path={`${match.url}/about/:id`} component={Hello}/>	
		     	<Route path={`${match.url}/task`} component={Task}/>	
		     	<Route path={`${match.url}/attendce`} component={Attendce}/>	
			</div>
		)
	}
}

export default Content;