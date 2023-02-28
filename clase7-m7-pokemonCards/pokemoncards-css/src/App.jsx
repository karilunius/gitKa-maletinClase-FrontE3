import "./css/app.css";
import React, { Component } from "react";
import Card from "./componentes/Card.jsx";
import Pokemon from "./componentes/Pokemon.jsx";
import { CreateGlobalStyle, AppContent, Title , ContenedorPrincipal } from "./styledComponents/styled-app.js";

const App = () => {
	return (
		<AppContent>
			<ContenedorPrincipal>
				<Title>Pokemon Cards</Title>
				<Card />
			</ContenedorPrincipal>
		</AppContent>
	);
};

export default App;



//before
/* import "./css/app.css";
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

export default App; */