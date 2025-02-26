import { Box, Grid2, GridSize, Typography } from "@mui/material";
import "./GridLabel.css"

interface GridLabelProps {
	size?: GridSize;
	title: string;
	subtitle?: string;
}

const GridLabel = ({title, subtitle, size = 1}: GridLabelProps) => {
	return (
		<Grid2 className={"grid_label"} size={size}>
			<Box className={"label_box"}>
				<Typography className={"grid_label_title"}>{title}</Typography>
				<Typography className={"grid_label_subtitle"}>{subtitle}</Typography>
			</Box>
		</Grid2>
	)
}

export default GridLabel;