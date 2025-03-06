import Grid2 from '@mui/material/Grid2';
import './Grid.css'
import { GridSize } from '../types/layout';

export interface GridNumberSourceProps {
	size: GridSize;
	value: number;
	label?: string;
	position?: "top" | "bottom";
	setValue: (value: number) => void;
}

const GridNumberSource = ({
	size,
	value,
	label,
	position = "top",
	setValue,
} : GridNumberSourceProps) => {
	return <Grid2 className={"grid_item"} size={size}>
			{position == "top" && <label className="grid_identifier">{label}</label>}
			<input
				className="grid_input"
				value={value}
				onChange={(e) => {
					const isNumeric = !isNaN(Number(e.target.value));
					if (setValue && isNumeric) {
						setValue(Number(e.target.value));
					}
				}}
			/>
			{position == "bottom" && <label className="grid_identifier">{label}</label>}
	</Grid2>
}

export default GridNumberSource;