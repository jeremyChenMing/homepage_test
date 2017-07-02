import React from 'react';
import {ReactDOM} from 'react-dom';
import { Button } from 'antd';
import { connect } from 'react-redux';
import cx from 'classnames';
import l from './main.less';

class Task extends React.Component {
	constructor(props) {
		super(props);
		
	}
	componentDidMount() {
		
	}
	render() {
		return(
			<div>
				task
				<Button type="primary">button</Button>
				<img src="/images/3.jpg" alt="tupian"/>
				<img src={require("../public/images/3.jpg")} alt="tupian"/>

				<p>的金额可理解啊快结束了空间的啊深刻的肌肤啊快睡觉啊</p>
				<p>的金额可理解啊快结束了空间的啊深刻的肌肤啊快睡觉啊</p>
				<p>的金额可理解啊快结束了空间的啊深刻的肌肤啊快睡觉啊</p>
				<p>的金额可理解啊快结束了空间的啊深刻的肌肤啊快睡觉啊</p>
				<p>的金额可理解啊快结束了空间的啊深刻的肌肤啊快睡觉啊</p>
				<p>的金额可理解啊快结束了空间的啊深刻的肌肤啊快睡觉啊</p>
				<p>的金额可理解啊快结束了空间的啊深刻的肌肤啊快睡觉啊</p>
				<p>的金额可理解啊快结束了空间的啊深刻的肌肤啊快睡觉啊</p>
				<p>的金额可理解啊快结束了空间的啊深刻的肌肤啊快睡觉啊</p>

				<Button>attendce</Button>
				<Button>attendce</Button>
				<Button>attendce</Button>
				<Button>attendce</Button>
			</div>
		)
	}
}

export default Task;