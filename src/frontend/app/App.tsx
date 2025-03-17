import "./App.css";

import GeneralSection from "./GeneralSection";
import AbilitiesSection from "./AbilitiesSection";
import DefenseSection from "./DefenseSection";
import OffenseSection from "./OffenseSection";
import SkillsSection from "./SkillsSection";


function App() {

	return (
		<div className="window">
			<GeneralSection/>
			<AbilitiesSection/>
			<DefenseSection/>
			<OffenseSection/>
			<SkillsSection/>
		</div>
	);
}

export default App;