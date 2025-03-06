import Grid2 from '@mui/material/Grid2';
import './Grid.css'
import { GridSize } from '../types/layout';
import { useState } from 'react';

export interface GridModSourceProps {
	size: GridSize;
	value: number;
	label?: string;
	position?: "top" | "bottom";
	setValue: (value: number) => void;
}

const addPlus = (value: number) => {
	if (value >= 0) {
		return "+" + value.toString();
	}
	return value.toString();
}

const GridModSource = ({
	size,
	value,
	label,
	position = "top",
	setValue,
} : GridModSourceProps) => {
	const [currentValue, setCurrentValue] = useState<string>(addPlus(value));


	return <Grid2 className={"grid_item"} size={size}>
			{position == "top" && <label className="grid_identifier">{label}</label>}
			<input
				className="grid_input"
				value={currentValue}
				onBlur={() => {setCurrentValue(addPlus(value))}}
				onFocus={() => {
					setCurrentValue(value.toString());
				}}
				onChange={(e) => {
					const isNumeric = !isNaN(Number(e.target.value));
					if (setValue) {
						if (isNumeric) {
							setValue(Number(e.target.value));
							setCurrentValue(e.target.value);
						} else if (e.target.value == "" || e.target.value == "-" || e.target.value == "+") {
							setValue(0);
							setCurrentValue(e.target.value);
						}
					}
				}}
			/>
			{position == "bottom" && <label className="grid_identifier">{label}</label>}
	</Grid2>
}

export default GridModSource;