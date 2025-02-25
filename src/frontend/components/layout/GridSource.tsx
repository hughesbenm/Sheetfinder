import Grid2 from '@mui/material/Grid2';
import LabeledInput from "./LabeledInput";
import './GridSink.css'

type GridSize = number | { xs?: number, sm?: number, md?: number, lg?: number, xl?: number };

export interface GridSourceProps<T extends string | number> {
	size: GridSize;
	value: T;
	label?: string;
	position?: "top" | "bottom";
	setValue: (value: T) => void;
}

const GridSource = <T extends string | number>({
	size,
	value,
	label,
	position = "top",
	setValue
} : GridSourceProps<T>) => {
	return <Grid2 className={"grid_sink"} size={size}>
		<LabeledInput position={position} text={label} value={value} setValue={(value: T) => setValue(value)}/>
	</Grid2>
}

export default GridSource;