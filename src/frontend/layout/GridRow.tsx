import Grid2 from "@mui/material/Grid2";
import { GridSinkProps } from "./GridSink";
import { useRef } from "react";
import React from "react";
import "./GridRow.css"

export interface GridRowProps {
	children: React.ReactElement<GridSinkProps>[] | React.ReactElement<GridSinkProps>;
}

const GridRow = ({children} : GridRowProps) => {
	const numColumns = useRef<number>(0);
	
	let totalColumns = 0;

	const childrenArray = React.Children.toArray(children) as React.ReactElement<GridSinkProps>[];

	React.Children.forEach(childrenArray, (child) => {
		if (React.isValidElement(child)) {
			let size = child.props.size;
			if (!size) {
				size = 1;
			}
			if (typeof size == 'number') {
				totalColumns += size;
			} else if (typeof size === 'string') {
				console.error("'string' sizes for the Section component is unimplmented")
			} else {
				console.error("Unimplemented, non-string, size for Section")
			}
			numColumns.current = totalColumns;
		}
	})

	return (
		<Grid2 className="grid_row" spacing={2} columns={numColumns.current} size={12} container>
			{childrenArray.map((element, elementIndex) => {
				return (
					<Grid2 size={!element.props.size ? 1 : element.props.size} key={elementIndex}>
						{element}
					</Grid2>
				);
			})}
		</Grid2>
	)
}

export default GridRow;