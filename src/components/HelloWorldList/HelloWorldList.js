import React, { Component } from 'react';
import './HelloWorldList.scss';
import HelloWorld from '../HelloWorld/HelloWorld';
import AddGreeter from '../AddGreeter/AddGreeter';

class HelloWorldList extends Component {
	constructor (props) {
		super(props);
		this.state = { greetings: ['Elliot', 'Billie', 'Becky'] };
		this.addGreeting = this.addGreeting.bind(this);
	};
	addGreeting(newName) {
		this.setState ({ greetings: [...this.state.greetings, newName] });
	}
	renderGreetings() {
		return this.state.greetings.map ( name => (
			<HelloWorld key={name} name={name}/>
		));
	};
	render () {
		return (
			<div className="HelloWorldList">
			<AddGreeter addGreeting={this.addGreeting}/>
				{this.renderGreetings()}
			</div>

		);
	};
}

export default HelloWorldList;
