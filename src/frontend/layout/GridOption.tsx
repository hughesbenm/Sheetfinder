export interface GridOptionProps {
	value: string | number,
	name: string | number
}

const GridOption = ({value, name}: GridOptionProps) => {
	return <option value={value}>{name}</option>
}

export default GridOption;
