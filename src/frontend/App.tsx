import "./App.css";

import { RootState } from "./app/store";
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import GeneralSection from "./components/GeneralSection";
import AbilitiesSection from "./components/AbilitiesSection";


function App() {
	const abilityScores = useAppSelector((state: RootState) => state.abilityScores);
	const dispatch = useAppDispatch();

	return (
		<div className="window">
			<GeneralSection/>
			<AbilitiesSection/>
		</div>
	);
}

export default App;