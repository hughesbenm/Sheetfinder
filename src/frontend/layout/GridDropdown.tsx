import Grid2 from '@mui/material/Grid2';
import './Grid.css'
import React from 'react';
import { GridOptionProps } from './GridOption';

type GridSize = number | { xs?: number, sm?: number, md?: number, lg?: number, xl?: number };

export interface GridDropdownProps <T extends string | number>{
	size: GridSize;
	value: T;
	label?: string;
	children: React.ReactElement<GridOptionProps>[] | React.ReactElement<GridOptionProps>;
	setValue: (newValue: T) => void,
}

const GridDropdown = <T extends string | number>({size, value, label, children, setValue} : GridDropdownProps<T>) => {
	return <Grid2 className={"grid_item"} size={size}>
		<label className="label">{label}</label>
		<select
			className="grid_select"
			value={value}
			onChange={(e) => {
				setValue(e.target.value as T)
			}}
		>
			{children}
		</select>
	</Grid2>
}

export default GridDropdown;