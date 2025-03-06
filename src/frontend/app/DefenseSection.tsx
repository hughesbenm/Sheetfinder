import { selectSizes } from "../redux/appSlice";
import { selectArmorClass, selectCMD, selectDefense, selectFlatFootedAC, selectTouchAC, setArmorBonus, setCurrentHitPoints, setDamageReduction, setDeflectionBonus, setImmunities, setMaxHitPoints, setMiscCMDMod, setMiscMod, setNaturalArmorBonus, setNonLethalDamage, setOtherACMods, setResistances, setShieldBonus, setSpellResistance, setTempCMDMod } from "../redux/defenseSlice";
import { selectGeneralInfo } from "../redux/generalSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";
import AbilityModSink from "../components/AbilityModSink";
import GridLabel from "../layout/GridLabel";
import GridModSource from "../layout/GridModSource";
import GridNumberSource from "../layout/GridNumberSource";
import GridRow from "../layout/GridRow";
import GridSink from "../layout/GridSink";
import GridStringSource from "../layout/GridStringSource";
import Section from "../layout/Section";
import { AbilityTag } from "../types/characterTypes";
import { modPlus } from "../util/modPlus";
import SaveRow from "../components/SaveRow";
import { SavingThrowType } from "../types/saves";
import { selectOffense } from "../redux/offenseSlice";
import SizeModSink from "../components/SizeModSink";
import BABSink from "../components/BABSink";


const DefenseSection = () => {	
	const armorBonus = useAppSelector(selectDefense).armorBonus;
	const shieldBonus = useAppSelector(selectDefense).shieldBonus;
	const armorClass = useAppSelector(selectArmorClass);
	const naturalArmorBonus = useAppSelector(selectDefense).naturalArmorBonus;
	const deflectionBonus = useAppSelector(selectDefense).deflectionBonus;
	const miscACMod = useAppSelector(selectDefense).miscMod;

	const touchAC = useAppSelector(selectTouchAC);
	const flatFootedAC = useAppSelector(selectFlatFootedAC);
	const otherACMods = useAppSelector(selectDefense).otherACMods;

	const maxHP = useAppSelector(selectDefense).maxHitPoints;
	const currentHP = useAppSelector(selectDefense).currentHitPoints;
	const nonLethalDamage = useAppSelector(selectDefense).nonLethalDamage;
	const damageReduction = useAppSelector(selectDefense).damageReduction;
	const spellResistance = useAppSelector(selectDefense).spellResistance;

	const resistances = useAppSelector(selectDefense).resistances;
	const immunities = useAppSelector(selectDefense).immunities;

	const CMD = useAppSelector(selectCMD);
	const miscCMDMods = useAppSelector(selectDefense).miscCMDMod;
	const tempCMDMod = useAppSelector(selectDefense).tempCMDMod;

	const dispatch = useAppDispatch();

	const handleArmorBonus = (value: number) => {
		dispatch(setArmorBonus(value));
	}

	const handleShieldBonus = (value: number) => {
		dispatch(setShieldBonus(value));
	}

	const handleNaturalArmorBonus = (value: number) => {
		dispatch(setNaturalArmorBonus(value));
	}

	const handleDeflectionBonus = (value: number) => {
		dispatch(setDeflectionBonus(value));
	}

	const handleMiscACMod = (value: number) => {
		dispatch(setMiscMod(value));
	}

	const handleOtherACMods = (value: string) => {
		dispatch(setOtherACMods(value));
	}

	const handleMaxHP = (value: number) => {
		dispatch(setMaxHitPoints(value));
	}

	const handleCurrentHP = (value: number) => {
		dispatch(setCurrentHitPoints(value));
	}

	const handleNonLethalDamage = (value: number) => {
		dispatch(setNonLethalDamage(value));
	}

	const handleDamageReduction = (value: number) => {
		dispatch(setDamageReduction(value));
	}

	const handleSpellResistance = (value: number) => {
		dispatch(setSpellResistance(value));
	}

	const handleResistances = (value: string) => {
		dispatch(setResistances(value));
	}

	const handleImmunities = (value: string) => {
		dispatch(setImmunities(value));
	}

	const handleMiscCMDMods = (value: number) => {
		dispatch(setMiscCMDMod(value));
	}

	const handleTempCMDMods = (value: number) => {
		dispatch(setTempCMDMod(value));
	}

	return (
		<Section title="Defense">
			<GridRow>
				<GridLabel size={1} title="AC" subtitle="Armor Class" />
				<GridSink size={1} label={"Total ="} value={armorClass} position={"bottom"}/>
				<GridLabel title="+10" />
				<GridModSource size={1} label={"Armor Bonus"} value={armorBonus} setValue={handleArmorBonus} position={"bottom"}/>
				<GridModSource size={1} label={"Shield Bonus"} value={shieldBonus} setValue={handleShieldBonus} position={"bottom"}/>
				<AbilityModSink size={1} type={AbilityTag.DEX} />
				<SizeModSink size={1} />
				<GridModSource size={1} label={"Natural Armor"} value={naturalArmorBonus} setValue={handleNaturalArmorBonus} position={"bottom"}/>
				<GridModSource size={1} label={"Deflection Bonus"} value={deflectionBonus} setValue={handleDeflectionBonus} position={"bottom"}/>
				<GridModSource label={"Misc. Modifier"} value={miscACMod} setValue={handleMiscACMod} position={"bottom"} size={4}/>
			</GridRow>
			<GridRow>
				<GridLabel title={"Touch"} subtitle="AC"/>
				<GridSink size={1} label={""} value={touchAC} position={"bottom"}/>
				<GridLabel title={"Flat"} subtitle="AC"/>
				<GridSink size={1} value={flatFootedAC} />
				<GridStringSource label={"Other AC Modifiers"} value={otherACMods} setValue={handleOtherACMods} position={"bottom"} size={5}/>
			</GridRow>
			<GridRow>
				<GridLabel title={"HP"} subtitle="Hit Points"/>
				<GridNumberSource size={1} label={"Total"} value={maxHP} setValue={handleMaxHP} position={"bottom"}/>
				<GridNumberSource size={2} label="Current" value={currentHP} setValue={handleCurrentHP} position={"bottom"}/>
				<GridNumberSource size={2} label={"Non-Lethal Damage"} value={nonLethalDamage} setValue={handleNonLethalDamage} position={"bottom"}/>
				<GridLabel size={1} title={"DR"} subtitle="Damage Reduction"/>
				<GridNumberSource value={damageReduction} setValue={handleDamageReduction} position={"bottom"} size={2}/>
				<GridLabel title={"SR"} subtitle="Spell Resistance"/>
				<GridNumberSource value={spellResistance} setValue={handleSpellResistance} position={"bottom"} size={1}/>
			</GridRow>

			<>
			{Object.values(SavingThrowType).map((save) => {
				return <SaveRow key={save} saveType={save} />
			})}
			</>			

			<GridRow>
				<GridLabel title={"Resist"} subtitle={"All Resistances"} size={2}/>
				{/* Think about MUI Chips for stuff like this, anything that involves adding an unknown amount, even if from a list of other ones*/}
				<GridStringSource size={4} label={"Elemental & Other"} value={resistances} setValue={handleResistances} position={"bottom"}/>
				<GridLabel title={"Immune"} subtitle={"All Immunities"} size={2}/>
				<GridStringSource size={3} label={"Effects & Other"} value={immunities} setValue={handleImmunities} position={"bottom"}/>
			</GridRow>
			<GridRow>
				<GridLabel size={2} title="CMD" subtitle="Combat Manuever Defense" />
				<GridSink size={1} label={"Total ="} value={CMD} position={"bottom"}/>
				<GridLabel title="+10" />
				<BABSink size={1}/>
				<AbilityModSink size={1} type={AbilityTag.DEX} />
				<AbilityModSink size={1} type={AbilityTag.STR} />
				<SizeModSink size={1}/>
				<GridModSource size={2} label={"+ Misc Modifiers"} value={miscCMDMods} setValue={handleMiscCMDMods} position={"bottom"}/>
				<GridModSource size={2} label={"Temp Modifiers"} value={tempCMDMod} setValue={handleTempCMDMods} position={"bottom"}/>
			</GridRow>
		</Section>
	);
}

export default DefenseSection;