import Grid2 from '@mui/material/Grid2';
import LabeledInput from "./LabeledInput";
import './GridSink.css'

type GridSize = number | { xs?: number, sm?: number, md?: number, lg?: number, xl?: number };

export interface GridSinkProps {
	size: GridSize;
	value?: string | number;
	label?: string;
	position?: "top" | "bottom";
}

const GridSink = ({size, value = "TEST", label, position = "top"} : GridSinkProps) => {
	return <Grid2 className={"grid_sink"} size={size}>
		<LabeledInput position={position} text={label} value={value}/>
	</Grid2>
}

export default GridSink;