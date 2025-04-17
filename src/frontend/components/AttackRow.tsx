import { useEffect } from "react"
import GridLabel from "../layout/GridLabel"
import GridRow from "../layout/GridRow"
import GridSink from "../layout/GridSink"
import GridStringSource from "../layout/GridStringSource"
import { selectAbilityMod } from "../redux/abilitySlice"
import { selectDefense, setSave } from "../redux/defenseSlice"
import { useAppDispatch, useAppSelector } from "../redux/store"
import { modPlus } from "../util/modPlus"
import { Attack } from "../types/attack"
import { selectOffense, setAttackAmmo, setAttackBonus, setAttackCritical, setAttackDamage, setAttackRange, setAttackWeapon } from "../redux/offenseSlice"

interface AttackRowProps {
	attack: Attack;
	index: number;
}

const AttackRow = ({attack, index}: AttackRowProps) => {
	const dispatch = useAppDispatch();
	
	const BAB = useAppSelector(selectOffense).baseAttackBonus;

	const handleAttackWeapon = (index: number, newWeapon: string) => {
		dispatch(setAttackWeapon({index, newWeapon}))
	}

	const handleAttackBonus = (index: number, newBonus: string) => {
		dispatch(setAttackBonus({index, newBonus}))
	}

	const handleAttackDamage = (index: number, newDamage: string) => {
		dispatch(setAttackDamage({index, newDamage}))
	}

	const handleAttackCritical = (index: number, newCritical: string) => {
		dispatch(setAttackCritical({index, newCritical}))
	}

	const handleAttackRange = (index: number, newRange: string) => {
		dispatch(setAttackRange({index, newRange}))
	}

	const handleAttackAmmo = (index: number, newAmmo: string) => {
		dispatch(setAttackAmmo({index, newAmmo}))
	}

	return <GridRow>
		<GridLabel size={3} title={attack.type} subtitle={attack.type + " Attack"}/>
		<GridStringSource size={6} label={"Weapon"} value={attack.weapon} setValue={(newValue: string) => {handleAttackWeapon(index, newValue)}} position={"bottom"}/>
		<GridStringSource size={4} label="Attack Bonus" value={attack.bonus} setValue={(newValue: string) => {handleAttackBonus(index, newValue)}} position="bottom"/>
		<GridStringSource size={4} label={"Damage"} value={attack.damage} setValue={(newValue: string) => {handleAttackDamage(index, newValue)}} position={"bottom"}/>
		<GridStringSource size={3} label={"Critical"} value={attack.critical} setValue={(newValue: string) => {handleAttackCritical(index, newValue)}} position={"bottom"}/>
		<GridStringSource size={2} label={"Range"} value={attack.range} setValue={(newValue: string) => {handleAttackRange(index, newValue)}} position={"bottom"}/>
		<GridStringSource size={5} label={"Ammunition"} value={attack.ammo} setValue={(newValue: string) => {handleAttackAmmo(index, newValue)}} position={"bottom"}/>
	</GridRow>
}

export default AttackRow;