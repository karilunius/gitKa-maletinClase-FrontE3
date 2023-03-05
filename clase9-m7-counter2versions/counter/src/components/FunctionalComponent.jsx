import React, { useState } from "react";
import "../css/fun.css";

const FunctionalComponent = () => {

    const [count, setcount] = useState(0)
    
    const increase = () => {
        setcount (count + 1)
    }

    const decrease = () => {
			setcount(count - 1);
		};

    return (
			<div className="card">
				<h1>Functional Component</h1>
				<p className="counter">{count}</p>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
			</div>
		);
};

export default FunctionalComponent;
