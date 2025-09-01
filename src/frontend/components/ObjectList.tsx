import { Box, Button, Typography } from "@mui/material"
import './ObjectList.css'

interface ObjectListProps {
	title: string;
	things: string[]
	onClickItem: () => void
}

const ObjectList: React.FC<ObjectListProps> = ({title, things, onClickItem}) => {
	return (
		<Box>
			<ObjectListTitle title={title} />
			{things.map((thing, index) => {
				return <ObjectListItem key={index} name={thing} onClick={onClickItem}/>
			})}
		</Box>
	)
}

interface ObjectListItemProps {
	name: string,
	onClick: () => void
}

const ObjectListItem: React.FC<ObjectListItemProps> = ({name}) => {
	return (
		<Button className={'object_list_button'}>{name}</Button>
	)
}

interface ObjectListTitleProps {
	title: string;
	subtitle?: string;
}

const ObjectListTitle: React.FC<ObjectListTitleProps> = ({title, subtitle}) => {
	return (
		<Box className={`grid_label`}>
			<Typography className={"grid_label_title"}>{title}</Typography>
			<Typography className={"grid_label_subtitle"}>{subtitle}</Typography>
		</Box>
	)
}

export default ObjectList;