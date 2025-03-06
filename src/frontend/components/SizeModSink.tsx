import GridSink from "../layout/GridSink"
import { useAppSelector } from "../redux/store"
import { modPlus } from "../util/modPlus"
import { selectSizes } from "../redux/appSlice"
import { selectGeneralInfo } from "../redux/generalSlice"

interface SizeModSink {
	size: number | { xs?: number, sm?: number, md?: number, lg?: number, xl?: number };
	label?: string;
}

const SizeModSink = ({ size, label = "+ Size Mod" } : SizeModSink) => {
	const charSize = useAppSelector(selectGeneralInfo).size;
	const sizes = useAppSelector(selectSizes);

	return (
		<GridSink size={size} label={label} value={modPlus(sizes[charSize].mod)} position="bottom"/>
	)
}

export default SizeModSink;