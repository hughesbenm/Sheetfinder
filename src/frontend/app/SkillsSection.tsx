import SkillRow from "../components/SkillRow"
import SkillsHeaderRow from "../components/SkillsHeaderRow";
import GridLabel from "../layout/GridLabel";
import GridNumberSource from "../layout/GridNumberSource";
import GridRow from "../layout/GridRow";
import GridSection from "../layout/GridSection";
import GridStringSource from "../layout/GridStringSource";
import { setLanguages, setXPNext, setXPTotal } from "../redux/skillSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";

const SkillsSection = () => {
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
		<GridSection title={"Skills"}>
			<SkillsHeaderRow />
			<>
				{Array.from(Object.values(skills)).map((skill, skillIndex) => {
					return <SkillRow key={skillIndex} skill={skill}/>
				})}
			</>
			<GridRow>
				<GridLabel size={4} title="Languages"/>
				<GridStringSource size={15} label={"Spoken/Writen"} value={languages} setValue={(newValue) => {handleLanguages(newValue)}}/>
				<GridLabel size={4} title="XP" subtitle="Experience Points"/>
				<GridNumberSource size={3} value={xpToNext} setValue={(newValue) => {handleXPTotal(newValue)}}/>
				<GridNumberSource size={3} value={totalXp} setValue={(newValue) => {handleXPNext(newValue)}} />
			</GridRow>
		</GridSection>
	)
}

export default SkillsSection;