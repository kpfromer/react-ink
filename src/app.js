import React, {Component} from 'react';
import {render, Color} from 'ink';
import Spinner from './Spinner';
import Gradient from './Gradient';

class Counter extends Component {
	constructor() {
		super();

		this.state = {
			i: 0
		};
	}

	render() {
		return (
			<Gradient name="rainbow">
				<Spinner /> {this.state.i} -  tests passed
			</Gradient>
		);
	}

	componentDidMount() {
		this.timer = setInterval(() => {
			this.setState({
				i: this.state.i + 1
			});
		}, 100);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}
}

render(<Counter/>);