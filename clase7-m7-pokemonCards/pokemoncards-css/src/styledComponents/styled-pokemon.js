import styled from "styled-components";

//.contenedor-pokemon
export const ContenedorPokemon = styled.div `
	width: 280px;
	height: 380px;
	margin: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	background-color: #f5d0d0;
	border-radius: 10%;
	box-shadow: 0 3px 13px 1px rgb(0 0 0 / 9%);
	border: 4px solid #ff314ccb;
`;

//.imagen-pokemon
export const ImagenPokemon = styled.img `
	height: 200px;
	width: auto;
	background-color: white;
	border-radius: 50%;
`;

//.tipo-pokemon
export const TipoPokemon = styled.p `
	position:relative;
	left: 178px;
	width: 100px;
	border-radius:5px;
	background-color:#ff314d;
	font-size: 1rem;
	padding: 5px;
	font-family:Arial, Helvetica, sans-serif;
	color: rgba(255, 255, 255, 0.897);
	text-shadow: #161313;
`;

//.id-pokemon
export const IdPokemon = styled.p `
    background-color:aliceblue;
	width: 45px;
	border-radius: 10px;
	margin: 5px;
`;

//.name-pokemon
export const NamePokemon = styled.p `
    background-color:#e31777;
	color: antiquewhite;
	width: 270px;
	border-radius: 10px;
	margin: 5px;
`;

//.powerlevel-pokemon
export const PowerLevelPokemon = styled.p `
    color:#0917ac;
`;

//.agresivo-pokemon
export const AgresivoPokemon = styled.p `
	display: flex;
	justify-content:flex-end;
	--es comment  background-color: #0917ac;  
    width: 250px;
	height: 20px;
	margin: 15px;
`;

//.agresivo-pokemon img
export const AgresivoPokemonImg = styled.img `
	position: relative;
	bottom: 10px;
	height: 2em;
    width: 2em;
`;

