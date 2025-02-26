import "./App.css";

import { RootState } from "./app/store";
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import GeneralSection from "./components/GeneralSection";
import AbilitiesSection from "./components/AbilitiesSection";
import DefenseSection from "./components/DefenseSection";
import OffenseSection from "./components/OffenseSection";


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