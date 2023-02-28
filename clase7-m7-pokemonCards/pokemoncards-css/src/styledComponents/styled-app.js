//page helper https://www.smashingmagazine.com/2020/07/styled-components-react/
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const CreateGlobalStyle = createGlobalStyle`
	*{
	margin: 0;
	padding: 0;
}

html,body {
	font-size: 18px;
	background-color: #f5f6f7;
}
`;

//.AppContent
export const AppContent = styled.div`
		min-height: 100vh;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		text-align: center;
`;

//h1
export const Title = styled.h1`
    text-align: center;
    margin: 0.5em;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 3em;
    color: rgb(255, 103, 76);
    opacity: 0.7;
    text-shadow:black;
`;

//.contenedor-principal
export const ContenedorPrincipal = styled.div`
		min-height: 600px;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		text-align: center;
`;
