import React from 'react';
import {ReactDOM} from 'react-dom';
import {
  HashRouter as Router,
  Route,   // 这是基本的路由块
  Link,    // 这是a标签
  Switch,   // 这是监听空路由的
  Redirect, // 这是重定向
  Prompt,   // 防止转换
} from 'react-router-dom';


import cx from 'classnames';
// import l from './Home.less';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';



class Home extends React.Component{
	constructor(props) {
		super(props);
		
	}
	componentDidMount() {
		
	}
	render() {
		const {location,history,match} = this.props;
		return(
			<div>
		      	<Header {...this.props} />
		      	<Content {...this.props} />
			</div>
		)
	}	
}

export default Home;