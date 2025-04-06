import SkillRow from "../components/SkillRow"
import SkillsHeaderRow from "../components/SkillsHeaderRow";
import GridSection from "../layout/GridSection"
import { useAppSelector } from "../redux/store";

const SkillsSection = () => {
	const skills = useAppSelector((state) => state.skills.skills)
	return (
		<GridSection title={"Skills"}>
			<SkillsHeaderRow />
			<>
				{Array.from(Object.values(skills)).map((skill, skillIndex) => {
					return <SkillRow key={skillIndex} skill={skill}/>
				})}
			</>
		</GridSection>
	)
}

export default SkillsSection;