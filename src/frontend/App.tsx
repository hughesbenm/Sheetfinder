import { useCallback, useState } from "react";
import "./App.css";

function App() {
  const [charName, setCharName] = useState<string>("");
  const [nodeVersion, setNodeVersion] = useState<string | undefined>(undefined);

  const updateNodeVersion = useCallback(
    async () => setNodeVersion(await backend.nodeVersion("Hello from App.tsx!")),
    []
  );

  return (
    <div className="window">
	  	<p>Text</p>
	  	<input type="text" />
	</div>
  );
}

export default App;