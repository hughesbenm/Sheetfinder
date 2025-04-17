import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Grid2, { GridSize } from '@mui/material/Grid2';
import GridSink, { GridSinkProps } from './GridSink';
import { ReactElement, useEffect, useMemo, useRef, useState } from "react";
import './Grid.css'
import React from "react";
import { GridRowProps } from "./GridRow";

interface GridSectionProps {
	title: string;
	children: React.ReactElement[] | React.ReactElement;
}

const GridSection = ({title, children} : GridSectionProps) => {
	const childrenArray = React.Children.toArray(children) as React.ReactElement<GridSinkProps>[];
	
	return (
		<div className="grid_section">
			<Box sx={{display: "flex", justifyContent: 'center'}}>
				<Typography variant={"h2"}>
					{title}
				</Typography>
			</Box>
			{childrenArray.map((element) => {
				return (
					element
				)
			})}
		</div>
	)
}

export default GridSection;