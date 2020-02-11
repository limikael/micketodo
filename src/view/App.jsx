import { h, Component } from 'preact';
import { useContext } from 'preact/compat';
import AppContext from '../utils/AppContext.js';

export default class App {
	onAddClick=()=>{
		this.context.addItem(1,2);
	}

	render() {
		return (
			<div class="app">
				<div>hello some kind of long text goes here... does it wrap ok?</div>
				<div style={{position: 'absolute'}}>
					<a href="#" onClick={this.onAddClick} class="my-add-link" style={{top: 0, position: 'absolute'}}>adify</a>
					<div style={{display: 'block'}} style={{top: 0, position: 'absolute', left: '5em'}}>
						<div class="ln1"/><div class="ln2"/>
						<div class="ln1"/>
					</div>
				</div>
				<ul>
					{this.context.items.map((item)=>{
						return <li>{item}</li>
					})}
				</ul>
				<div>
					<div class="test1"/><div class="test2"/>
				</div>
				<div class="foot">
					hello i'm the footer...
				</div>
			</div>
		);
	}
}