import { Box, Grid2, Typography } from "@mui/material"
import { GridSize } from "../types/layout"

interface GridCheckboxProps {
	size: GridSize;
	value: boolean;
	setValue: (newValue: boolean) => void;
}

const GridCheckbox = ({size, value, setValue}: GridCheckboxProps) => {
	return (
		<Grid2 className={"grid_item"} size={size}>
			<Box>
				<input
					type="checkbox"
					checked={value}
					onChange={(e) => {
						setValue(e.target.checked)
					}}
				/>
			</Box>
		</Grid2>
	)
}

export default GridCheckbox;