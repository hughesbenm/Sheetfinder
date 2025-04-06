import GridRow from "../layout/GridRow";
import GridTableHeader from "../layout/GridTableHeader";

const SkillsHeaderRow = () => {
	return (
		<GridRow className={""}>
			<GridTableHeader text={"Class Skill"} size={1}/>
			<GridTableHeader text={"Skill Name"} size={6}/>
			<GridTableHeader text={"Total"} size={2}/>
			<GridTableHeader text={"Ability Mod"} size={3}/>
			<GridTableHeader text={"Ranks"} size={2}/>
			<GridTableHeader text={"Class"} size={2}/>
			<GridTableHeader text={"Racial"} size={2}/>
			<GridTableHeader text={"Trait"} size={2}/>
			<GridTableHeader text={"Misc"} size={4}/>
		</GridRow>
	)
}

export default SkillsHeaderRow;