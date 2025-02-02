import { useCallback, useState } from "react";
import "./App.css";
import LabeledInput from "./components/LabeledInput";

function App() {
  const [charName, setCharName] = useState<string>("");
  const [alignment, setAlignment] = useState<string>("");
  const [playerName, setPlayerName] = useState<string>("");

  return (
    <div className="window">
	  	<LabeledInput value={charName} setValue={setCharName}>Character Name</LabeledInput>
	  	<LabeledInput value={alignment} setValue={setAlignment}>Alignment</LabeledInput>
	  	<LabeledInput value={playerName} setValue={setPlayerName}>Player Name</LabeledInput>
	</div>
  );
}

export default App;