import "./App.css";
import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";
//import { AppFrame } from './styled/StyledComp';


function App() {
	return (
		<div className="App">
			<FunctionalComponent />
			<ClassComponent/>
		</div>
	);
}

export default App;
