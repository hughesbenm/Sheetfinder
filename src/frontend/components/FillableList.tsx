import { Box, TextField } from "@mui/material"

interface FillableListProps {
	things: string[]
}

const FillableList: React.FC<FillableListProps> = ({things}) => {
	return (
		<Box>
			{things.map((thing) => {
				return <TextField>{thing}</TextField>
			})}
		</Box>
	)
}

export default FillableList;