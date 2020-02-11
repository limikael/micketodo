import { h, Component } from 'preact';
import { useContext } from 'preact/compat';
import AppContext from '../utils/AppContext.js';

export default class App {
	onAddClick=()=>{
		this.context.addItem(1,2);
	}

	render() {
		return (
			<div>
				<a href="#" onClick={this.onAddClick} class="add-button">add</a>
				<ul>
					{this.context.items.map((item)=>{
						return <li>{item}</li>
					})}
				</ul>
			</div>
		);
	}
}