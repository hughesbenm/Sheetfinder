import { Grid2, Typography } from "@mui/material";
import { GridSize } from "../types/layout";

export interface GridTableHeaderProps {
	size: GridSize;
	text: string;
}

const GridTableHeader = ({size, text}: GridTableHeaderProps) => {
	return <Grid2 size={size} className={'grid_item grid_table_header'}>
		<p>{text}</p>
	</Grid2>
}

export default GridTableHeader;