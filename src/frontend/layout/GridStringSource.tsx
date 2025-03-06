import Grid2 from '@mui/material/Grid2';
import { GridSize } from '../types/layout';
import './Grid.css'

export interface GridStringSourceProps {
	size: GridSize;
	value: string;
	label?: string;
	position?: "top" | "bottom";
	setValue: (value: string) => void;
	justify?: "left" | "center" | "right";
}

const GridStringSource = ({
	size,
	value,
	label,
	position = "top",
	setValue,
	justify = "left"
} : GridStringSourceProps) => {
	return <Grid2 className={`grid_item ${justify}`} size={size}>
			{position == "top" && <label className="grid_identifier">{label}</label>}
			<input
				className="grid_input"
				value={value}
				onChange={(e) => {
					if (setValue) {
						setValue(e.target.value);
					}
				}}
			/>
			{position == "bottom" && <label className="grid_identifier">{label}</label>}
	</Grid2>
}

export default GridStringSource;