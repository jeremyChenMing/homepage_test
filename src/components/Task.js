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
			</div>
		)
	}
}

export default Task;