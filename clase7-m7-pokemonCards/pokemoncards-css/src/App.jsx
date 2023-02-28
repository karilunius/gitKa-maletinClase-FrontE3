import "./css/app.css";
import React, { Component } from "react";
import Card from "./componentes/Card.jsx";
import Pokemon from "./componentes/Pokemon.jsx";

const App = () => {
	return (
		<div className="App">
			<div className="contenedor-principal">
				<h1>Pokemon Cards</h1>
				<Card />
			</div>
		</div>
	);
};

export default App;
