
import React from 'react';
import {ReactDOM} from 'react-dom';
import { Button } from 'antd';
import { connect } from 'react-redux';
import cx from 'classnames';
import l from './main.less';
import {environment} from '../redux/actions/environment';



class Hello  extends React.Component {
	constructor(props) {
		super(props);
		this.handle = this.handle.bind(this);
		this.state = {

		}
	}
	handle(){
		const { dispatch } = this.props;
		console.log('点击事件')
		dispatch(environment('222'))
	}
	render() {
		return(
			<div className={cx(l.box)}>
				hello world!!!123
				{/*<img src={require("../public/images/3.jpg")} alt=""/>*/}
				<img src="/images/3.jpg" alt="1"/>
				<div className={cx(l.bg)}>
					this props value is {this.props.value}
				</div>
				<Button onClick={this.handle}>好的1123123</Button>
			</div>
		)
	}
}
const mapStateToProps = state => {
	const {environment: { value } } = state;
	return {
		value
	}
}

export default connect(mapStateToProps)(Hello);



