import { useEffect } from "react"
import GridLabel from "../layout/GridLabel"
import GridModSource from "../layout/GridModSource"
import GridRow, { GridRowProps } from "../layout/GridRow"
import GridSink from "../layout/GridSink"
import GridStringSource from "../layout/GridStringSource"
import { selectAbilityMod } from "../redux/abilitySlice"
import { selectDefense, setSave } from "../redux/defenseSlice"
import { useAppDispatch, useAppSelector } from "../redux/store"
import { SavingThrowType } from "../types/saves"
import { modPlus } from "../util/modPlus"

interface SaveRowProps {
	saveType: SavingThrowType
}

const SaveRow = ({saveType}: SaveRowProps) => {
	const dispatch = useAppDispatch();
	
	const save = useAppSelector(selectDefense).saves[saveType];
	const abilityMod = useAppSelector(selectAbilityMod(save.ability));

	const handleBaseSave = (newSave: number) => {
		dispatch(setSave({type: saveType, save: {...save, base: newSave}}));
	}

	const handleMiscMod = (newMiscMod: number) => {
		dispatch(setSave({type: saveType, save: {...save, miscMod: newMiscMod}}));
	}

	const handleTempMod = (newTempMod: number) => {
		dispatch(setSave({type: saveType, save: {...save, tempMod: newTempMod}}));
	}

	const handleOtherMods = (newOtherMods: string) => {
		dispatch(setSave({type: saveType, save: {...save, otherMods: newOtherMods}}));
	}

	const saveBonus = save.base + abilityMod + save.miscMod + save.tempMod;

	return <GridRow>
		<GridLabel size={2} title={saveType} subtitle={save.ability}/>
		<GridSink size={1} label={"Total ="} value={modPlus(saveBonus)} position={"bottom"}/>
		<GridModSource size={1} label={"Base Save"} value={save.base} setValue={handleBaseSave} position={"bottom"}/>
		<GridSink size={1} label={save.ability + " Mod"} value={modPlus(abilityMod)} position={"bottom"}/>
		<GridModSource size={1} label={"Misc Mod"} value={save.miscMod} setValue={handleMiscMod} position={"bottom"}/>
		<GridModSource size={1} label={"Temp Mod"} value={save.tempMod} setValue={handleTempMod} position={"bottom"}/>
		<GridStringSource size={4} label={"Other Mods"} value={save.otherMods} setValue={handleOtherMods} position={"bottom"}/>
	</GridRow>
}

export default SaveRow;