

import React from 'react';
import {ReactDOM} from 'react-dom';
import {
  HashRouter as Router,
  Route,   // 这是基本的路由块
  Link,    // 这是a标签
  Switch,   // 这是监听空路由的
  Redirect, // 这是重定向
  Prompt,   // 防止转换
} from 'react-router-dom'

import Other from './Other';
class Nav  extends React.Component {
	constructor(props) {
		super(props);
		
	}
	render() {
		return(
			<div >
				<p style={{height:200}}>nav</p>
				<p style={{height:200}}>nav</p>
			</div>
		)
	}
}

export default Nav;