import {
	setAge,
	setAlignment,
	setCharacterName,
	setClass,
	setDeity,
	setEyes,
	setGender,
	setHair,
	setHeight,
	setHomeland,
	setPlayerName,
	setRace,
	setSize,
	setWeight
} from "../redux/generalSlice";

import { useAppDispatch, useAppSelector } from "../redux/store";
import GridDropdown from "../layout/GridDropdown"
import GridOption from "../layout/GridOption"
import GridRow from "../layout/GridRow"
import GridSection from "../layout/GridSection"
import GridStringSource from "../layout/GridStringSource"
import { selectSizes } from "../redux/appSlice"

const GeneralSection = () => {
	const characterName = useAppSelector((state) => state.generalInfo.characterName)
	const alignment = useAppSelector((state) => state.generalInfo.alignment)
	const playerName = useAppSelector((state) => state.generalInfo.playerName)

	const playerClass = useAppSelector((state) => state.generalInfo.class)
	const deity = useAppSelector((state) => state.generalInfo.deity)
	const homeland = useAppSelector((state) => state.generalInfo.homeland)

	const race = useAppSelector((state) => state.generalInfo.race)
	const size = useAppSelector((state) => state.generalInfo.size)
	const gender = useAppSelector((state) => state.generalInfo.gender)
	const age = useAppSelector((state) => state.generalInfo.age)
	const height = useAppSelector((state) => state.generalInfo.height)
	const weight = useAppSelector((state) => state.generalInfo.weight)
	const hair = useAppSelector((state) => state.generalInfo.hair)
	const eyes = useAppSelector((state) => state.generalInfo.eyes)

	const creatureSizes = useAppSelector(selectSizes)

	const dispatch = useAppDispatch();

	return <GridSection title='General'>
		<GridRow>
			<GridStringSource size={9} label="Character Name" value={characterName} setValue={(newName: string) => {dispatch(setCharacterName(newName))}} />
			<GridStringSource size={4} label="Alignment" value={alignment} setValue={(newAlignment: string) => {dispatch(setAlignment(newAlignment))}} />
			<GridStringSource size={9} label="Player Name" value={playerName} setValue={(newName: string) => {dispatch(setPlayerName(newName))}} />
		</GridRow>
		<GridRow>
			<GridStringSource size={13} label="Character Class & Level" value={playerClass} setValue={(newClass: string) => {dispatch(setClass(newClass))}} />
			<GridStringSource size={5} label="Deity" value={deity} setValue={(newDeity: string) => {dispatch(setDeity(newDeity))}} />
			<GridStringSource size={4} label="Homeland" value={homeland} setValue={(newHomeland: string) => {dispatch(setHomeland(newHomeland))}} />
		</GridRow>
		<GridRow>
			<GridStringSource size={18} label="Race" value={race} setValue={(value: string) => {dispatch(setRace(value))}}/>
			<GridDropdown
				size={18}
				label={"Size"}
				value={size}
				setValue={(newSize: string) => {
					dispatch(setSize(newSize));
				}}
			>
				{Object.entries(creatureSizes).map((creatureSizeTuple) => {
					return <GridOption key={creatureSizeTuple[0]} value={creatureSizeTuple[0]} name={creatureSizeTuple[1].sizeName}/>
				})}
			</GridDropdown>
			<GridStringSource size={8} label="Gender" value={gender} setValue={(newValue: string) => { dispatch(setGender(newValue))}}/>
			<GridStringSource size={8} label="Age" value={age} setValue={(newValue: string) => { dispatch(setAge(newValue))}}/>
			<GridStringSource size={9} label="Height" value={height} setValue={(newValue: string) => { dispatch(setHeight(newValue))}}/>
			<GridStringSource size={9} label="Weight" value={weight} setValue={(newValue: string) => { dispatch(setWeight(newValue))}}/>
			<GridStringSource size={9} label="Hair" value={hair} setValue={(newValue: string) => { dispatch(setHair(newValue))}}/>
			<GridStringSource size={9} label="Eyes" value={eyes} setValue={(newValue: string) => { dispatch(setEyes(newValue))}}/>
		</GridRow>
	</GridSection>
}

export default GeneralSection;