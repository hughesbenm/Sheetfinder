import AbilityModSink from "../components/AbilityModSink";
import AttackRow from "../components/AttackRow";
import BABSink from "../components/BABSink";
import SizeModSink from "../components/SizeModSink";
import GridButton from "../layout/GribButton";
import GridLabel from "../layout/GridLabel";
import GridNumberSource from "../layout/GridNumberSource";
import GridRow from "../layout/GridRow";
import GridSink from "../layout/GridSink";
import GridStringSource from "../layout/GridStringSource";
import GridSection from "../layout/GridSection";
import { selectGeneralInfo } from "../redux/generalSlice";
import { setBaseAttackBonus, selectOffense, setMiscInitMod, selectInitiative, setModsAndNotes, setLandSpeed, setArmorSpeed, setSpeedModsAndNotes, setBurrowSpeed, setClimbSpeed, setFlySpeed, selectCMB, setMiscCMBMod, setTempCMBMod, addEmptyAttack } from "../redux/offenseSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { AttackType } from "../types/attack";
import { AbilityTag } from "../types/characterTypes";
import { biggerThan } from "../types/sizes";
import { modPlus } from "../util/modPlus";

const OffenseSection = () => {
	const dispatch = useAppDispatch();

	const size = useAppSelector(selectGeneralInfo).size;

	const initMod = useAppSelector(selectInitiative);
	const miscInitMod = useAppSelector(selectOffense).miscInitMod;
	const baseAttackBonus = useAppSelector(selectOffense).baseAttackBonus;
	const modsAndNotes = useAppSelector(selectOffense).modsAndNotes;

	const landSpeed = useAppSelector(selectOffense).landSpeed;
	const armorSpeed = useAppSelector(selectOffense).armorSpeed;
	const flySpeed = useAppSelector(selectOffense).flySpeed;
	const climbSpeed = useAppSelector(selectOffense).climbSpeed;
	const burrowSpeed = useAppSelector(selectOffense).burrowSpeed;
	const speedModsAndNotes = useAppSelector(selectOffense).speedModsAndNotes;

	const CMB = useAppSelector(selectCMB);
	const miscCMBMod = useAppSelector(selectOffense).miscCMBMod;
	const tempCMBMod = useAppSelector(selectOffense).tempCMBMod;

	const attacks = useAppSelector(selectOffense).attacks;

	const handleMiscInitMod = (newValue: number) => {
		dispatch(setMiscInitMod(newValue));
	}

	const handleBaseAttack = (newValue: number) => {
		dispatch(setBaseAttackBonus(newValue));
	}

	const handleModsAndNotes = (newValue: string) => {
		dispatch(setModsAndNotes(newValue));
	}

	const handleLandSpeed = (newValue: number) => {
		dispatch(setLandSpeed(newValue));
	}

	const handleArmorSpeed = (newValue: number) => {
		dispatch(setArmorSpeed(newValue));
	}

	const handleFlySpeed = (newValue: number) => {
		dispatch(setFlySpeed(newValue));
	}

	const handleClimbSpeed = (newValue: number) => {
		dispatch(setClimbSpeed(newValue));
	}

	const handleBurrowSpeed = (newValue: number) => {
		dispatch(setBurrowSpeed(newValue));
	}

	const handleSpeedModsAndNotes = (newValue: string) => {
		dispatch(setSpeedModsAndNotes(newValue));
	}

	const handleMiscCMBMod = (newValue: number) => {
		dispatch(setMiscCMBMod(newValue));
	}

	const handleTempCMBMod = (newValue: string) => {
		dispatch(setTempCMBMod(newValue));
	}

	const handleAddRangedAttack = () => {
		dispatch(addEmptyAttack(AttackType.RANGED));
	}

	const handleAddMeleeAttack = () => {
		dispatch(addEmptyAttack(AttackType.MELEE));
	}

	return <GridSection title='Offense'>
		<GridRow>
			<GridLabel size={2} title="Initiative" subtitle="Modifier"/>
			<GridSink position="bottom" label="Total =" value={modPlus(initMod)} size={1} />
			<AbilityModSink size={1} type={AbilityTag.DEX} />
			<GridNumberSource mod position="bottom" label="+ Misc Modifier" value={miscInitMod} setValue={handleMiscInitMod} size={1} />
			<GridLabel size={1} title="BAB" subtitle="Base Attack Bonus"/>
			<GridNumberSource mod position="bottom" value={baseAttackBonus} setValue={handleBaseAttack} size={1} />
			<GridLabel size={2} title="Conditional" subtitle="Modifiers"/>
			<GridStringSource position="bottom" label="Modifiers & Notes" value={modsAndNotes} setValue={handleModsAndNotes} size={3} />
		</GridRow>
		<GridRow>
			<GridLabel size={2} title="Speed" subtitle="Land"/>
			<GridNumberSource position="bottom" label="Base Speed" value={landSpeed} setValue={handleLandSpeed} size={1}/>
			<GridNumberSource position="bottom" label="With Armor" value={armorSpeed} setValue={handleArmorSpeed} size={1}/>
			<GridNumberSource position="bottom" label="Fly" value={flySpeed} setValue={handleFlySpeed} size={2}/>
			<GridNumberSource position="bottom" label="Climb" value={climbSpeed} setValue={handleClimbSpeed} size={1}/>
			<GridNumberSource position="bottom" label="Burrow" value={burrowSpeed} setValue={handleBurrowSpeed} size={1}/>
			<GridStringSource position="bottom" label="Modifiers & Notes" value={speedModsAndNotes} setValue={handleSpeedModsAndNotes} size={2}/>
		</GridRow>
		<GridRow>
			<GridLabel size={2} title="CMB" subtitle="Combat Manuever Bonus" />
			<GridSink size={1} label={"Total ="} value={CMB} position={"bottom"}/>
			<BABSink size={1}/>
			{ biggerThan(size, "tiny") ?
				<AbilityModSink size={1} type={AbilityTag.STR} /> :
				<AbilityModSink size={1} type={AbilityTag.DEX} />
			}
			<SizeModSink special gridSize={1} />
			<GridNumberSource mod size={3} label={"+ Misc Modifier"} value={miscCMBMod} setValue={handleMiscCMBMod} position={"bottom"}/>
			<GridStringSource size={3} label={"Temp Modifiers"} value={tempCMBMod} setValue={handleTempCMBMod} position={"bottom"}/>
		</GridRow>
		<>
		{attacks.map((ele, eleInd) => {
			return <AttackRow key={eleInd} attack={ele} index={eleInd}/>
		})}
		</>
		<GridRow>
			<GridButton gridSize={1} onClick={handleAddRangedAttack} label={"Add Ranged Attack"}/>
			<GridButton gridSize={1} onClick={handleAddMeleeAttack} label={"Add Melee Attack"}/>
		</GridRow>
	</GridSection>
}

export default OffenseSection;