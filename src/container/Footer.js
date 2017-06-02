import React from 'react';
import {ReactDOM} from 'react-dom';

import cx from 'classnames';
import l from './Index.less';

class Footer extends React.Component {
	constructor(props) {
		super(props);
		
	}
	render() {
		return(
			<div className={cx(l.footer)}>
				{this.props.children}	
			</div>
		)
	}
}

export default Footer;