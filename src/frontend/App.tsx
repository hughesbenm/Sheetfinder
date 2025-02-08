import { useCallback, useEffect, useState } from "react";
import "./App.css";
import LabeledInput from "./components/LabeledInput";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { Button, Typography } from "@mui/material";
import { getMod } from "./util/getMod";

import { useAppSelector, useAppDispatch } from './hooks/hooks';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./app/store";
import { AbilityName, AbilityTag } from "./features/character/characterTypes";
import { setTo } from "./features/character/abilityScoreSlice";


function App() {
	const [charName, setCharName] = useState<string>("");
	const [alignment, setAlignment] = useState<string>("");
	const [playerName, setPlayerName] = useState<string>("");

	const abilityScores = useAppSelector((state: RootState) => state.abilityScores);
	const dispatch = useAppDispatch();

	return (
		<div className="window">
			<Grid container>
				<Grid size={4}>
					<LabeledInput text={"Character Name"} value={charName} setValue={(newValue: string) => setCharName(newValue)} />
				</Grid>
				<Grid size={4}>
					<LabeledInput text={"Alignment"} value={alignment} setValue={(newValue: string) => setAlignment(newValue)} />
				</Grid>
				<Grid size={4}>
					<LabeledInput text={"Player Name"} value={playerName} setValue={(newValue: string) => setPlayerName(newValue)} />
				</Grid>
				<Grid size={12}>
					<Box sx={{display: "flex", justifyContent: 'center'}}>
						<Typography variant={"h2"}>
							Abilities
						</Typography>
					</Box>
				</Grid>
				<Grid size={12}>
					<Box sx={{display: 'flex'}}>
						
						{Object.entries(abilityScores).map(([key, score]) => {
							return <Box key={key}>
								<LabeledInput
									value={score}
									setValue={(newValue: number) => {
										dispatch(setTo({abilityTag: AbilityTag[key as keyof typeof AbilityTag], value: newValue}))
									}}
									text={key}
								/>
								<LabeledInput
									disabled
									value={getMod(score) < 0 ? "" + getMod(score) : "+" + getMod(score)}
									text={`${key} Mod`}
								/>
							</Box>
						})}
						
						{/* <LabeledInput disabled value={"+" + getMod(str)} setValue={setPlayerName}>STR Mod</LabeledInput> */}
					</Box>
				</Grid>
			</Grid>
		</div>
	);
}

export default App;