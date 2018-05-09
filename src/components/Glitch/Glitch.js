import React, { Component } from 'react';
import './Glitch.scss';
class Glitch extends Component {
	constructor (props) {
		super(props);
	 };
	 
	 render () {

		return (

			<span className="glitch">
				{this.props.text.split('').map((letter, i) => {
					return <span key={i} className={i}>{letter}</span>;
				})}
			</span>
		);
	};	
};

export default Glitch;