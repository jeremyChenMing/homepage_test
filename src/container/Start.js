import React from 'react';
import {ReactDOM} from 'react-dom';
import cx from 'classnames';
import './test.css'
// import l from './Index.less';


class Start extends React.Component {
	constructor(props) {
		super(props);
		
	}
	componentDidMount() {
		
	}
	render() {
		return(
			<div className="box">
				start page!!!!!!!!---
				<a href="#/home">进入主页</a>		
			</div>
		)
	}
}

export default Start;