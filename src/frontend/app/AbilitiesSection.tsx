import { selectAbilityScores, setTo } from "../redux/abilitySlice";
import { useAppDispatch, useAppSelector } from "../redux/store";
import AbilityModSink from "../components/AbilityModSink";
import GridLabel from "../layout/GridLabel";
import GridNumberSource from "../layout/GridNumberSource";
import GridRow from "../layout/GridRow";
import GridSink from "../layout/GridSink";
import GridSection from "../layout/GridSection";
import { AbilityTag } from "../types/characterTypes";


const AbilitiesSection = () => {
	const strength = useAppSelector(selectAbilityScores).STR;

	const dexterity = useAppSelector(selectAbilityScores).DEX;

	const constitution = useAppSelector(selectAbilityScores).CON;

	const intelligence = useAppSelector(selectAbilityScores).INT;

	const wisdom = useAppSelector(selectAbilityScores).WIS;

	const charisma = useAppSelector(selectAbilityScores).CHA;

	const dispatch = useAppDispatch();
	
	const setAbilityScore = (abilityTag: AbilityTag, value: number) => {
		dispatch(setTo({abilityTag, value}));
	}

	return <GridSection title='Abilities'>
		<GridRow>
			<GridLabel title={"STR"} subtitle={"Strength"} size={1}/>
			<GridNumberSource
				value={strength}
				setValue={(newScore: number) => {setAbilityScore(AbilityTag.STR, newScore)}}
				position="bottom"
				label="Score"
				size={1}
			/>
			<AbilityModSink type={AbilityTag.STR} label="Modifier" size={1}/>
			<GridSink value={"STR"} position="bottom" label="Temp Score" size={1}/>
			<GridSink value={"STR"} position="bottom" label="Temp Modifier" size={1}/>

			<GridLabel title={"DEX"} subtitle={"Dexterity"} size={1}/>
			<GridNumberSource value={dexterity} setValue={(newScore: number) => {setAbilityScore(AbilityTag.DEX, newScore)}} position="bottom" label="Score" size={1}/>
			<AbilityModSink type={AbilityTag.DEX} label="Modifier" size={1}/>
			<GridSink value={"DEX"} position="bottom" label="Temp Score" size={1}/>
			<GridSink value={"DEX"} position="bottom" label="Temp Modifier" size={1}/>

			<GridLabel title={"CON"} subtitle={"Constitution"} size={1}/>
			<GridNumberSource value={constitution} setValue={(newScore: number) => {setAbilityScore(AbilityTag.CON, newScore)}} position="bottom" label="Score" size={1}/>
			<AbilityModSink type={AbilityTag.CON} label="Modifier" size={1}/>
			<GridSink value={"CON"} position="bottom" label="Temp Score" size={1}/>
			<GridSink value={"CON"} position="bottom" label="Temp Modifier" size={1}/>
		</GridRow>
		
		<GridRow>
			<GridLabel title={"INT"} subtitle={"Intelligence"} size={1}/>
			<GridNumberSource value={intelligence} setValue={(newScore: number) => {setAbilityScore(AbilityTag.INT, newScore)}} position="bottom" label="Score" size={1}/>
			<AbilityModSink type={AbilityTag.INT} label="Modifier" size={1}/>
			<GridSink value={"INT"} position="bottom" label="Temp Score" size={1}/>
			<GridSink value={"INT"} position="bottom" label="Temp Modifier" size={1}/>

			<GridLabel title={"WIS"} subtitle={"Wisdom"} size={1}/>
			<GridNumberSource value={wisdom} setValue={(newScore: number) => {setAbilityScore(AbilityTag.WIS, newScore)}} position="bottom" label="Score" size={1}/>
			<AbilityModSink type={AbilityTag.WIS} label="Modifier" size={1}/>
			<GridSink value={"WIS"} position="bottom" label="Temp Score" size={1}/>
			<GridSink value={"WIS"} position="bottom" label="Temp Modifier" size={1}/>

			<GridLabel title={"CHA"} subtitle={"Charisma"} size={1}/>
			<GridNumberSource value={charisma} setValue={(newScore: number) => {setAbilityScore(AbilityTag.CHA, newScore)}} position="bottom" label="Score" size={1}/>
			<AbilityModSink type={AbilityTag.CHA} label="Modifier" size={1}/>
			<GridSink value={"CHA"} position="bottom" label="Temp Score" size={1}/>
			<GridSink value={"CHA"} position="bottom" label="Temp Modifier" size={1}/>
		</GridRow>
	</GridSection>
}

export default AbilitiesSection;