import { Box, Grid2, GridSize, Typography } from "@mui/material";
import "./Grid.css"
import "./GridLabel.css"

interface GridLabelProps {
	size: GridSize;
	title: string;
	subtitle?: string;
	justify?: "left" | "center" | "right";
	titleSize?: `${number}px` | `${number}em` | `${number}rem`| `${number}%` | `${number}pt`
	subtitleSize?: `${number}px` | `${number}em` | `${number}rem`| `${number}%` | `${number}pt`
}

const GridLabel = ({title, subtitle, size = 1, justify = "center", titleSize = "25px", subtitleSize = "16px"}: GridLabelProps) => {
	return (
		<Grid2 className={'grid_item'} size={size}>
			<Box className={`grid_label  ${justify}`}>
				<Typography fontSize={titleSize} className={"grid_label_title"}>{title}</Typography>
				<Typography fontSize={subtitleSize} className={"grid_label_subtitle"}>{subtitle}</Typography>
			</Box>
		</Grid2>
	)
}

export default GridLabel;