import "./LabeledInput.css";
import React from "react";
import { GridOptionProps } from "./GridOption";
import './LabeledSelect.css'
import { Grid2 } from "@mui/material";

interface LabeledSelectProps<T extends string | number> {
	position?: "top" | "bottom",
	value: T;
	className?: string,
	setValue: (newValue: T) => void,
	disabled?: boolean,
	text?: string,
	children: React.ReactElement<GridOptionProps>[] | React.ReactElement<GridOptionProps>;
}

const LabeledSelect = <T extends string | number>({
	value,
	className,
	text,
	disabled,
	setValue,
	children
}: LabeledSelectProps<T>): JSX.Element => {

	return <Grid2 className={`grid_item`} size={size}>
		<div className={`labeled_select ${className}`}>
			<label className="label">{text}</label>
			<select
				className="select"
				disabled={disabled}
				value={value}
				onChange={(e) => {
					setValue(e.target.value as T)
				}}
			>
				{children}
			</select>
		</div>
	</Grid2>
}

export default LabeledSelect;