import "./App.css";

import { RootState } from "./app/store";
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import GeneralSection from "./GeneralSection";
import AbilitiesSection from "./AbilitiesSection";
import DefenseSection from "./DefenseSection";
import OffenseSection from "./OffenseSection";


function App() {

	return (
		<div className="window">
			<GeneralSection/>
			<AbilitiesSection/>
			<DefenseSection/>
			<OffenseSection/>
		</div>
	);
}

export default App;