import Grid2 from '@mui/material/Grid2';
import './Grid.css'

type GridSize = number | { xs?: number, sm?: number, md?: number, lg?: number, xl?: number };

export interface GridSinkProps {
	size: GridSize;
	value?: string | number;
	label?: string;
	position?: "top" | "bottom";
	bold?: boolean;
	justify?:  "left" | "center" | "right";
}

const GridSink = ({
	size,
	value = "TEST",
	label,
	position = "top",
	bold = false,
	justify = "center"
} : GridSinkProps) => {
	return <Grid2 className={"grid_item"} size={size}>
		{position == "top" && <label className="label">{label}</label>}
		<input
			disabled={true}
			className={`grid_input ${bold ? "bold" : ""} ${justify}_text`}
			value={value}
		/>
		{position == "bottom" && <label className="label">{label}</label>}
	</Grid2>
}

export default GridSink;