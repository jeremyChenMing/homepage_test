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




class Header extends React.Component {
	constructor(props) {
		super(props);
		this.clickOne = this.clickOne.bind(this);
		this.clickTwo = this.clickTwo.bind(this);
		this.clickThr = this.clickThr.bind(this);
		this.clickFour = this.clickFour.bind(this);
		this.state = {
			active: 'home'
		}
	}
	componentDidMount() {
		const { location , match } = this.props;
		if (location.pathname.indexOf("/home/other") != -1) {
			this.setState({active:'other'})
		}else if (location.pathname.indexOf("/home/about") != -1) {
			this.setState({active:'about'})
		}else if (location.pathname.indexOf("/home/task") != -1) {
			this.setState({active:'task'})
		}else if (location.pathname.indexOf("/home/attendce") != -1) {
			this.setState({active:'attendce'})
		}else{
			this.setState({active:'home'})
		}
	}
	clickOne() {
		this.setState({active:'home'})
	}
	clickTwo() {
		this.setState({active:'other'})
	}
	clickThr() {
		this.setState({active:'about'})
	}
	clickFour() {
		this.setState({active:'task'})
	}
	render() {
		const { match } = this.props;
		const { active } = this.state;
		console.log(this.props)
		return(
			<div className={cx(l.header)}>
				<ul className={cx(l.con)}>
			        <li><Link onClick={this.clickOne} to={`${match.url}`} className={cx( active=='home' ? 'active' : null)}>Home</Link></li>
			        <li><Link onClick={this.clickTwo} to={`${match.url}/other`} className={cx( active=='other' ? 'active' : null)}>Other</Link></li>
			        <li><Link onClick={this.clickThr} to={`${match.url}/about/12345678`} className={cx( active=='about' ? 'active' : null)}>About</Link></li>
			        <li><Link onClick={this.clickFour} to={`${match.url}/task`} className={cx( active=='task' ? 'active' : null)}>Task</Link></li>
			        <li><Link onClick={this.clickFour} to={`${match.url}/attendce`} className={cx( active=='attendce' ? 'active' : null)}>Attendce</Link></li>
		        </ul>		
			</div>
		)
	}
}

export default Header;