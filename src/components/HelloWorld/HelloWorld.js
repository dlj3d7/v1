import React, { Component } from 'react';
import './HelloWorld.scss';

class HelloWorld extends Component {
	render () {
		return (
			<div className="HelloWorld">
				{this.state.greeting} {this.props.name}!
			</div>);
		};
	constructor (props) {
		super(props);
		this.state = { greeting: 'Hello' };
 	}
};

export default HelloWorld;