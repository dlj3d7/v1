import React, { Component } from 'react';
import './PaletteRamp.scss';
import Palette from '../Palette/Palette';

class PaletteRamp extends Component {
	constructor (props) {
		super(props);
		// this.state = { hue: ['0', '270', '135'] };
    };
	
	renderHue() {
		return this.state.hue.map ( hue => (
			<Palette hue={hue} key={hue}/>
		));
	};
	render () {
		return (
			<div className="PaletteRamp">
                {this.renderHue()}
			</div>

		);
	};
}

export default PaletteRamp;

