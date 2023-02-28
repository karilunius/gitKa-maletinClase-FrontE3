import '../css/Card.css';
import Pokemon from "./Pokemon.jsx";
import Data from "../Data.json";
import { Kard, ContenedorCard } from "../styledComponents/styled-kard.js";


function Card() {
	const type = ["fire", "water", "electric", "air"];

	return (
		<Kard>
			<ContenedorCard>
				{type.map((elemento) => (
					<div key={elemento}>
						{Data[elemento].map((pokemon) => (
							<Pokemon key={pokemon.id} {...pokemon} type={elemento} />
						))}
					</div>
				))}
			</ContenedorCard>
		</Kard>
	);
}

export default Card;
