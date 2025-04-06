import GridCheckbox from "../layout/GridCheckbox";
import GridLabel from "../layout/GridLabel";
import GridNumberSource from "../layout/GridNumberSource";
import GridRow from "../layout/GridRow";
import GridSink from "../layout/GridSink";
import { selectAbilityMod } from "../redux/abilitySlice";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { Skill } from "../types/skill";
import { getAbilityMod } from "../util/getAbilityMod";
import AbilityModSink from "./AbilityModSink";
import { selectSkills, setClassSkill, setMiscBonus, setRacialBonus, setRanks, setTraitBonus } from "../redux/skillSlice";
import { modPlus } from "../util/modPlus";
import GridModSource from "../layout/GridModSource";

interface SkillRowProps {
	skill: Skill;
}

const SkillRow = ({skill}: SkillRowProps) => {
	const dispatch = useAppDispatch();
	const abilityMod = useAppSelector(selectAbilityMod(skill.ability))
	const totalSkillBonus = abilityMod + skill.ranks + (skill.classSkill ? 3 : 0) + skill.traitBonus + skill.racialBonus + skill.miscBonus;

	const handleSkillRanks = (skillName: string, newRanks: number) => {
		dispatch(setRanks({skillName, newRanks}));
	}

	const handleClassSkill = (skillName: string, isClassSkill: boolean) => {
		dispatch(setClassSkill({skillName, isClassSkill}));
	}

	const handleRacialBonus = (skillName: string, racialBonus: number) => {
		dispatch(setRacialBonus({skillName, racialBonus}));
	}

	const handleTraitBonus = (skillName: string, traitBonus: number) => {
		dispatch(setTraitBonus({skillName, traitBonus}));
	}

	const handleMiscBonus = (skillName: string, miscBonus: number) => {
		dispatch(setMiscBonus({skillName, miscBonus}));
	}

	return (
		<GridRow>
			<GridCheckbox size={1} value={skill.classSkill} setValue={(newValue) => handleClassSkill(skill.name, newValue)}/>
			<GridLabel size={6} justify={"left"} title={skill.name} />
			<GridSink size={2} value={modPlus(totalSkillBonus)}/>
			<AbilityModSink size={3} type={skill.ability}/>
			<GridModSource size={2} value={skill.ranks} setValue={(newValue) => handleSkillRanks(skill.name, newValue)} />
			<GridSink size={2} value={modPlus(skill.classSkill ? 3 : 0)} />
			<GridModSource size={2} value={skill.ranks} setValue={(newValue) => handleRacialBonus(skill.name, newValue)} />
			<GridModSource size={2} value={skill.ranks} setValue={(newValue) => handleTraitBonus(skill.name, newValue)} />
			<GridModSource size={4} value={skill.ranks} setValue={(newValue) => handleMiscBonus(skill.name, newValue)} />
		</GridRow>
	)
}

export default SkillRow;