import FillableList from "../components/FillableList";
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
	const skills = useAppSelector((state) => state.skills.skills);

	const languages = useAppSelector((state) => state.skills.languages);
	const totalXp = useAppSelector((state) => state.skills.totalXp);
	const xpToNext = useAppSelector((state) => state.skills.xpToNext);

	const handleLanguages = (newLanguages: string) => {
		dispatch(setLanguages(newLanguages));
	}

	const handleXPTotal = (newXPTotal: number) => {
		dispatch(setXPTotal(newXPTotal));
	}

	const handleXPNext = (newXPNext: number) => {
		dispatch(setXPNext(newXPNext));
	}
	
	return (
		<GridSection title={"Feats & Special Abilities"}>
			<GridRow>
				<GridLabel size={0} title={"Test"} />
				<FillableList things={["test", "test1", "test2", "test3", "test4"]} />
			</GridRow>
		</GridSection>
	)
}

export default FeatsSection;