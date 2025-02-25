import Grid2 from '@mui/material/Grid2';
import LabeledInput from "./LabeledInput";
import './GridSink.css'
import LabeledSelect from './LabeledSelect';
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
	return <Grid2 className={"grid_sink"} size={size}>
		<LabeledSelect text={label} value={value} setValue={setValue}>
			{children}
		</LabeledSelect>
	</Grid2>
}

export default GridDropdown;