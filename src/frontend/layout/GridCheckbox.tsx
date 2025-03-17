import { Box, Grid2, Typography } from "@mui/material"
import { GridSize } from "../types/layout"

interface GridCheckboxProps {
	size: GridSize;
}

const GridCheckbox = ({size}: GridCheckboxProps) => {
	return (
		<Grid2 className={"grid_label"} size={size}>
			<Box className={"label_box"}>
				<Typography className={"grid_label_title"}>{"test"}</Typography>
				<Typography className={"grid_label_subtitle"}>{"subtest"}</Typography>
			</Box>
		</Grid2>
	)
}

export default GridCheckbox;