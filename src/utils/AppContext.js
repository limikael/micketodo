import { h, Component } from 'preact';

class AppContext extends Component {
	constructor(props) {
		super(props);

		let state={
			state: props.state,
			controllers: {}
		};

		for (let controllerKey in props.controllers) {
			state.controllers[controllerKey]=(...args)=>{
				if (args[0] && args[0].preventDefault)
					args[0].preventDefault();

				this.setState({
					state: props.controllers[controllerKey](this.state.state, ...args)
				});
			}
		}

		this.state=state;
	}

	getChildContext() {
		return {
			...this.state.controllers,
			...this.state.state
		};
	}

	render() {
		return this.props.children;
	}
};

export default AppContext;