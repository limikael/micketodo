import { h, render, createContext } from 'preact';
import App from './view/App.jsx';
import AppContext from './utils/AppContext.js';

let controllers={
	addItem: (state, a, b)=>{
		state.items.push("one more");
		return state;
	},

	removeItem: (state)=>{
		return state;
	}
}

let state={
	items: ["hello", "world", "test"]
};

let a=(
	<AppContext state={state} controllers={controllers}>
		<App/>
	</AppContext>
);

function start() {
	render(a, document.body);
}

if (window.hasOwnProperty("cordova"))
	document.addEventListener('deviceready',start);

else
	start();
