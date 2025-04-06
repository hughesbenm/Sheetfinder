import { Box, Grid2, GridSize, Typography } from "@mui/material";
import "./Grid.css"
import "./GridLabel.css"

interface GridLabelProps {
	size?: GridSize;
	title: string;
	subtitle?: string;
	justify?: "left" | "center" | "right";
}

const GridLabel = ({title, subtitle, size = 1, justify = "center"}: GridLabelProps) => {
	return (
		<Grid2 className={'grid_item'} size={size}>
			<Box className={`grid_label  ${justify}`}>
				<Typography className={"grid_label_title"}>{title}</Typography>
				<Typography className={"grid_label_subtitle"}>{subtitle}</Typography>
			</Box>
		</Grid2>
	)
}

export default GridLabel;