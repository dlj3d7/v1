import React, { Component } from 'react';
import './Palette.scss';



class Palette extends Component {
	
	 render () {
		 
		return (
			
			<div className="palette" alt={this.props.alt}>
			
				<div className="swatch plus3" style=
					{
						{
							color:`hsla(${this.props.hue}, 100%, 100%, 100%)`,
							backgroundColor: `hsla(${this.props.hue}, 55%, 13%, 100%)`
						}
					}>
					<span>+ 3</span>
				</div>
				<div className="swatch plus2" style=
					{
						{
							color:`hsla(${this.props.hue}, 100%, 100%, 100%)`,
							backgroundColor: `hsla(${this.props.hue}, 81%, 17%, 100%)`
						}
					}>
					<span>+ 2</span>
				</div>
				<div className="swatch plus1" style=
					{
						{
							color:`hsla(${this.props.hue}, 100%, 100%, 100%)`,
							backgroundColor: `hsla(${this.props.hue}, 91%, 26%, 100%)`
						}
					}>
					<span>+ 1</span>
				</div>
				<div className="swatch pure" style=
					{
						{
							color:`hsla(${this.props.hue}, 100%, 100%, 100%)`,
							backgroundColor: `hsla(${this.props.hue}, 100%, 50%, 100%)`
						}
					}>
					<span>H = {this.props.hue}</span>
				</div>
				<div className="swatch minus1" style=
					{
						{
							color:`hsla(${this.props.hue}, 100%, 100%, 100%)`,
							backgroundColor: `hsla(${this.props.hue}, 76%, 59%, 100%)`
						}
					}>
					<span>- 1</span>
				</div>
				<div className="swatch minus2" style=
					{
						{
							color:`hsla(${this.props.hue}, 100%, 100%, 100%)`,
							backgroundColor: `hsla(${this.props.hue}, 79%, 76%, 100%)`
						}
					}>
					<span>- 2</span>
				</div>
				<div className="swatch minus3" style=
					{
						{
							color:`hsla(${this.props.hue}, 100%, 100%, 100%)`,
							backgroundColor: `hsla(${this.props.hue}, 48%, 90%, 100%)`
						}
					}>
					<span>- 3</span>
				</div>
			</div>);
		};
	
};

export default Palette;