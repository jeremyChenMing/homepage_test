
import React from 'react';
import {ReactDOM} from 'react-dom';
import { Button,Input } from 'antd';
import { connect } from 'react-redux';
import cx from 'classnames';
import l from './main.less';
import {environment} from '../redux/actions/environment';
import moment from 'moment'
import {
  HashRouter as Router,
  Route,   // 这是基本的路由块
  Link,    // 这是a标签
  Switch,   // 这是监听空路由的
  Redirect, // 这是重定向
  Prompt,   // 防止转换
} from 'react-router-dom'




var InputandButtom = React.createClass({
    addData:function(){
        var addText = this.refs.inputext.value
        console.log(addText)
        var addIndate = this.props.data
        addIndate.push({
            text:addText,
            key:Date.now()
        })
        this.setState({
            data:addIndate
        })
        
    },
    render:function(){
        return(
            <form>
                <input type="text" ref="inputext" />
                <button onClick={this.addData}>save</button>
            </form>
        )
    }
})







import fetch from '../utils/fetch.js'

class Other extends React.Component {
	constructor(props) {
		super(props);
		
	}
	componentDidMount() {
		// fetch.get('/api/v1/enterprise/account/info', {}).then( data => {
		// fetch.get('/api/world', {}).then( data => {
		// 	console.log(data)
		// })
		
	}
	Topic({match}) {
		return(
			<div>
			    <h3>{match.params.text}</h3>
			    <a href="#/">home</a>
			</div>
		)
	}
	render() {
		const { match } = this.props;
		const obj = {
			key:'name',
			value:'cell',
			ard:'62220208099788976776',
		}
		return(
			<div>
				<h1 >a  new  page</h1>
				<Input {...obj}></Input>
				<ul>
					<li><Link to={`${match.url}/rendering`}>get back</Link></li>
				</ul>


				<InputandButtom data={[]}></InputandButtom>
				<Route exact path={match.url} render={() => (
			      	<h3>Please select a topic.</h3>
			    )}/>
				<Route path={`${match.url}/:text`} component={this.Topic}/>	
			</div>
		)
	}
}

export default Other