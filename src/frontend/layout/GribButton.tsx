import { Grid2 } from "@mui/material"
import { GridSize } from "../types/layout"

interface GridButtonProps {
	gridSize: GridSize;
	onClick?: () => void;
	label: string;
}

const GridButton = ({ gridSize, onClick, label }: GridButtonProps) => {
	return <Grid2 className={"grid_item"} size={gridSize}>
		<button
			onClick={() => {
				if (onClick) {
					onClick()
				}
			}
			}
			className={"grid_button"}
		>
			{label}
		</button>
	</Grid2>
}

export default GridButton;