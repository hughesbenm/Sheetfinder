import { RootState } from "../app/store"
import { setAge, setAlignment, setCharacterName, setEyes, setGender, setHair, setHeight, setPlayerName, setRace, setSize, setWeight } from "../features/character/generalSlice"
import { useAppDispatch, useAppSelector } from "../hooks/hooks"
import { CreatureSize } from "../types/sizes"
import GridDropdown from "./layout/GridDropdown"
import GridOption from "./layout/GridOption"
import GridRow from "./layout/GridRow"
import GridSource from "./layout/GridSource"
import Section from "./layout/Section"

const GeneralSection = () => {
	const characterName = useAppSelector((state: RootState) => state.generalInfo.characterName)
	const alignment = useAppSelector((state: RootState) => state.generalInfo.alignment)
	const playerName = useAppSelector((state: RootState) => state.generalInfo.playerName)
	const race = useAppSelector((state: RootState) => state.generalInfo.race)
	const size = useAppSelector((state: RootState) => state.generalInfo.size)
	const gender = useAppSelector((state: RootState) => state.generalInfo.gender)
	const age = useAppSelector((state: RootState) => state.generalInfo.age)
	const height = useAppSelector((state: RootState) => state.generalInfo.height)
	const weight = useAppSelector((state: RootState) => state.generalInfo.weight)
	const hair = useAppSelector((state: RootState) => state.generalInfo.hair)
	const eyes = useAppSelector((state: RootState) => state.generalInfo.eyes)


	const dispatch = useAppDispatch();

	return <Section title='General'>
		<GridRow>
			<GridSource
				label="Character Name"
				value={characterName}
				setValue={(newName: string) => {dispatch(setCharacterName(newName))}}
				size={3}
			/>
			<GridSource
				label="Alignment"
				value={alignment}
				setValue={(newAlignment: string) => {dispatch(setAlignment(newAlignment))}}
				size={2}
			/>
			<GridSource
				label="Player Name"
				value={playerName}
				setValue={(newName: string) => {dispatch(setPlayerName(newName))}}
				size={3}
			/>
		</GridRow>
		<GridRow>
			<GridSource label="Race" value={race} setValue={(value: string) => {dispatch(setRace(value))}} size={2}/>
			<GridDropdown
				label={"Size"}
				value={size}
				setValue={(newSize: string) => {
					if (Object.values(CreatureSize).includes(newSize as CreatureSize)) {
						setSize(newSize as CreatureSize);
					}
				}}
				size={2}
			>
				{Object.values(CreatureSize).map((element, elementIndex) => {
					return <GridOption key={elementIndex} value={element} name={element}/>
				})}
			</GridDropdown>
			<GridSource label="Gender" value={gender} setValue={(newValue: string) => { dispatch(setGender(newValue))}} size={1}/>
			<GridSource label="Age" value={age} setValue={(newValue: string) => { dispatch(setAge(newValue))}} size={1}/>
			<GridSource label="Height" value={height} setValue={(newValue: string) => { dispatch(setHeight(newValue))}} size={1}/>
			<GridSource label="Weight" value={weight} setValue={(newValue: string) => { dispatch(setWeight(newValue))}} size={1}/>
			<GridSource label="Hair" value={hair} setValue={(newValue: string) => { dispatch(setHair(newValue))}} size={1}/>
			<GridSource label="Eyes" value={eyes} setValue={(newValue: string) => { dispatch(setEyes(newValue))}} size={1}/>
		</GridRow>
	</Section>
}

export default GeneralSection;