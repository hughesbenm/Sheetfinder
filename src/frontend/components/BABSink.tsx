import GridSink from "../layout/GridSink"
import { useAppSelector } from "../redux/store"
import { modPlus } from "../util/modPlus"
import { selectOffense } from "../redux/offenseSlice";

interface BABSinkProps {
	size: number | { xs?: number, sm?: number, md?: number, lg?: number, xl?: number };
	label?: string;
}

const BABSink = ({ size, label = "+ BAB" } : BABSinkProps) => {
	const baseAttackBonus = useAppSelector(selectOffense).baseAttackBonus;

	return (
		<GridSink size={size} label={label} value={modPlus(baseAttackBonus)} position="bottom"/>
	)
}

export default BABSink;