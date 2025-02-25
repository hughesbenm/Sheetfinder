import { RootState } from "../app/store"
import { setTo } from "../features/character/abilitySlice"
import { AbilityTag } from "../types/characterTypes"
import { useAppDispatch, useAppSelector } from "../hooks/hooks"
import { getMod } from "../util/getMod"
import GridLabel from "./layout/GridLabel"
import GridRow from "./layout/GridRow"
import GridSink from "./layout/GridSink"
import GridSource from "./layout/GridSource"
import Section from "./layout/Section"

const AbilitiesSection = () => {
	const strength = useAppSelector((state: RootState) => state.abilityScores.STR);
	const strengthMod = useAppSelector((state: RootState) => getMod(state.abilityScores.STR));

	const dexterity = useAppSelector((state: RootState) => state.abilityScores.DEX);
	const dexterityMod = useAppSelector((state: RootState) => getMod(state.abilityScores.DEX));

	const constitution = useAppSelector((state: RootState) => state.abilityScores.CON);
	const constitutionMod = useAppSelector((state: RootState) => getMod(state.abilityScores.CON));

	const intelligence = useAppSelector((state: RootState) => state.abilityScores.INT);
	const intelligenceMod = useAppSelector((state: RootState) => getMod(state.abilityScores.INT));

	const wisdom = useAppSelector((state: RootState) => state.abilityScores.WIS);
	const wisdomMod = useAppSelector((state: RootState) => getMod(state.abilityScores.WIS));

	const charisma = useAppSelector((state: RootState) => state.abilityScores.CHA);
	const charismaMod = useAppSelector((state: RootState) => getMod(state.abilityScores.CHA));

	const dispatch = useAppDispatch();
	
	const setAbilityScore = (abilityTag: AbilityTag, value: number) => {
		dispatch(setTo({abilityTag, value}));
	}

	return <Section title='Abilities'>
		<GridRow>
			<GridLabel title={"STR"} subtitle={"Strength"} size={1}/>
			<GridSource
				value={strength}
				setValue={(newScore: number) => {setAbilityScore(AbilityTag.STR, newScore)}}
				position="bottom"
				label="Score"
				size={1}
			/>
			<GridSink value={strengthMod} position="bottom" label="Modifier" size={1}/>
			<GridSink value={"STR"} position="bottom" label="Temp Score" size={1}/>
			<GridSink value={"STR"} position="bottom" label="Temp Modifier" size={1}/>

			<GridLabel title={"DEX"} subtitle={"Dexterity"} size={1}/>
			<GridSource value={dexterity} setValue={(newScore: number) => {setAbilityScore(AbilityTag.DEX, newScore)}} position="bottom" label="Score" size={1}/>
			<GridSink value={dexterityMod} position="bottom" label="Modifier" size={1}/>
			<GridSink value={"DEX"} position="bottom" label="Temp Score" size={1}/>
			<GridSink value={"DEX"} position="bottom" label="Temp Modifier" size={1}/>

			<GridLabel title={"CON"} subtitle={"Constitution"} size={1}/>
			<GridSource value={constitution} setValue={(newScore: number) => {setAbilityScore(AbilityTag.CON, newScore)}} position="bottom" label="Score" size={1}/>
			<GridSink value={constitutionMod} position="bottom" label="Modifier" size={1}/>
			<GridSink value={"CON"} position="bottom" label="Temp Score" size={1}/>
			<GridSink value={"CON"} position="bottom" label="Temp Modifier" size={1}/>
		</GridRow>
		
		<GridRow>
			<GridLabel title={"INT"} subtitle={"Intelligence"} size={1}/>
			<GridSource value={intelligence} setValue={(newScore: number) => {setAbilityScore(AbilityTag.INT, newScore)}} position="bottom" label="Score" size={1}/>
			<GridSink value={intelligenceMod} position="bottom" label="Modifier" size={1}/>
			<GridSink value={"INT"} position="bottom" label="Temp Score" size={1}/>
			<GridSink value={"INT"} position="bottom" label="Temp Modifier" size={1}/>

			<GridLabel title={"WIS"} subtitle={"Wisdom"} size={1}/>
			<GridSource value={wisdom} setValue={(newScore: number) => {setAbilityScore(AbilityTag.WIS, newScore)}} position="bottom" label="Score" size={1}/>
			<GridSink value={wisdomMod} position="bottom" label="Modifier" size={1}/>
			<GridSink value={"WIS"} position="bottom" label="Temp Score" size={1}/>
			<GridSink value={"WIS"} position="bottom" label="Temp Modifier" size={1}/>

			<GridLabel title={"CHA"} subtitle={"Charisma"} size={1}/>
			<GridSource value={charisma} setValue={(newScore: number) => {setAbilityScore(AbilityTag.CHA, newScore)}} position="bottom" label="Score" size={1}/>
			<GridSink value={charismaMod} position="bottom" label="Modifier" size={1}/>
			<GridSink value={"CHA"} position="bottom" label="Temp Score" size={1}/>
			<GridSink value={"CHA"} position="bottom" label="Temp Modifier" size={1}/>
		</GridRow>
	</Section>
}

export default AbilitiesSection;