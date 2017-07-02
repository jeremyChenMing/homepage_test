

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
import {Button, TimePicker} from 'antd';
import moment from 'moment';

class Nav  extends React.Component {
	constructor(props) {
		super(props);
		this.time1= this.time1.bind(this);
		this.time2= this.time2.bind(this);
		this.state = {
			time1:'',
			time2:''
		}
	}
	time1(time,timestring) {
		console.log(time)
		this.setState({
			time1:time
		})
	}
	time2(time,timestring) {
		console.log(time)
		this.setState({
			time2:time
		})
	}

	render() {
		const format = 'HH:mm';
		const {time1,time2} = this.state;
		const a = moment(time1)
		const b = moment(time2)
		// const c = b.diff(a, 'hours') // 1
		const c = b.diff(a) // 毫秒
		console.log(c)
		const h = c / 1000 / 3600 
		console.log(h)
		return(
			<div >
				<p style={{height:200}}>nav</p>
				<Button>anniu</Button>

				<TimePicker onChange={this.time1} format={format} />
				<TimePicker onChange={this.time2}  format={format} />
			</div>
		)
	}
}

export default Nav;