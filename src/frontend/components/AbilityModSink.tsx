import { GridSize } from "@mui/material/Grid2"
import { AbilityTag } from "../types/characterTypes"
import GridSink from "../layout/GridSink"
import { useAppSelector } from "../redux/store"
import { selectAbilityScores } from "../redux/abilitySlice"
import { getAbilityMod } from "../util/getAbilityMod"
import { modPlus } from "../util/modPlus"

interface AbilityModSinkProps {
	type: AbilityTag;
	size: number | { xs?: number, sm?: number, md?: number, lg?: number, xl?: number };
	label?: string;
}

const AbilityModSink = ({ type, size, label = type + " Mod" } : AbilityModSinkProps) => {
	const abilityScores = useAppSelector(selectAbilityScores);
	const abilityMod = getAbilityMod(abilityScores[type]);

	return (
		<GridSink size={size} label={label} value={modPlus(abilityMod)} position="bottom"/>
	)
}

export default AbilityModSink;