import React from 'react';
import {ReactDOM} from 'react-dom';
import { Button } from 'antd';
import { connect } from 'react-redux';
import cx from 'classnames';
import l from './main.less';

class Attendce extends React.Component {
	constructor(props) {
		super(props);
		
	}
	componentDidMount() {
		
	}
	render() {
		return(
			<div>
				Attendce

				<Button>attendce</Button>
				<Button>attendce</Button>
				<Button>attendce</Button>
				<Button>attendce</Button>
			</div>
		)
	}
}

export default Attendce;