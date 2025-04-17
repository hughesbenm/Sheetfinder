import Grid2 from '@mui/material/Grid2';
import './Grid.css'
import { GridSize } from '../types/layout';
import { useState } from 'react';

export interface GridNumberSourceProps {
	size: GridSize;
	value: number;
	label?: string;
	position?: "top" | "bottom";
	setValue: (value: number) => void;
	mod?: boolean;
	justify?: "left" | "center" | "right";
}

const GridNumberSource = ({
	size,
	value,
	label,
	position = "top",
	setValue,
	mod = false,
	justify = "center"
} : GridNumberSourceProps) => {
	const addPlus = (value: number) => {
		if (value >= 0) {
			return "+" + value.toString();
		}
		return value.toString();
	}

	const [currentValue, setCurrentValue] = useState<string>(mod ? addPlus(value) : value.toString());


	const modBlur = () => {
		if (mod) {
			setCurrentValue(addPlus(value));
		} else {
			if (currentValue == "") {
				setCurrentValue("0");
			}
		}
	}

	return <Grid2 className={"grid_item"} size={size}>
			{position == "top" && <label className="grid_identifier">{label}</label>}
			<input
				className={`grid_input ${justify}_text`}
				value={currentValue}
				onBlur={modBlur}
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

export default GridNumberSource;