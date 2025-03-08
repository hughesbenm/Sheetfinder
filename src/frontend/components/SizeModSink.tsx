import GridSink from "../layout/GridSink"
import { useAppSelector } from "../redux/store"
import { modPlus } from "../util/modPlus"
import { selectSizes } from "../redux/appSlice"
import { selectGeneralInfo } from "../redux/generalSlice"

interface SizeModSink {
	gridSize: number | { xs?: number, sm?: number, md?: number, lg?: number, xl?: number };
	label?: string;
	special?: boolean;
}

const SizeModSink = ({ gridSize, special = false, label = special ? "+ Special Size Mod" : "+ Size Mod", } : SizeModSink) => {
	const sizeIndex = useAppSelector(selectGeneralInfo).size;
	const size = useAppSelector(selectSizes)[sizeIndex];
	const relevantMod = special ? size.specialMod : size.mod;

	return (
		<GridSink size={gridSize} label={label} value={modPlus(relevantMod)} position="bottom"/>
	)
}

export default SizeModSink;