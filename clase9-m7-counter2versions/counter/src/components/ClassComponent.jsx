import React, { component } from "react";
import "../css/fun.css";

class ClassComponent extends React.Component {
	//constructor
	constructor() {
		super();
		this.state = { count: 0 };
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
	}

	increase() {
		this.setState({ count: this.state.count + 1 });
	}

	decrease() {
		this.setState({ count: this.state.count - 1 });
	}

	render() {
		return (
			<div className="card">
				<h1> Class</h1>
                <h1>Component</h1>
				<p className="counter">{this.state.count}</p>
				<button onClick={this.increase}>+</button>
				<button onClick={this.decrease}>-</button>
			</div>
		);
	}
};

export default ClassComponent;
