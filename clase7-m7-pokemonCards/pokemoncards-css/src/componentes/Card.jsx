import '../css/Card.css';
import Pokemon from "./Pokemon.jsx";
import Data from "../Data.json";

function Card() {
	const type = ["fire", "water", "electric", "air"];

	return (
		<div className="Card">
			<div className="contenedor-card">
				{type.map((elemento) => (
					<div key={elemento}>
						{Data[elemento].map((pokemon) => (
							<Pokemon key={pokemon.id} {...pokemon} type={elemento} />
						))}
					</div>
				))}
			</div>
		</div>
	);
}

export default Card;
