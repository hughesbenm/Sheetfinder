import ObjectList from "../components/ObjectList";
import SkillRow from "../components/SkillRow"
import SkillsHeaderRow from "../components/SkillsHeaderRow";
import GridLabel from "../layout/GridLabel";
import GridNumberSource from "../layout/GridNumberSource";
import GridRow from "../layout/GridRow";
import GridSection from "../layout/GridSection";
import GridStringSource from "../layout/GridStringSource";
import { setLanguages, setXPNext, setXPTotal } from "../redux/skillSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";

const FeatsSection = () => {
	const dispatch = useAppDispatch();
	const handleClickFeat = () => {

	}
	
	return (
		<GridSection title={"Feats & Special Abilities"}>
			<GridRow>
				<ObjectList title={"Feats"} things={["test", "test1", "test2", "test3", "test4"]} onClickItem={handleClickFeat} />
			</GridRow>
		</GridSection>
	)
}

export default FeatsSection;