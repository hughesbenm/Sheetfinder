import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AbilityTag } from "../types/characterTypes"
import { RootState } from "./store"
import { getAbilityMod } from "../util/getAbilityMod"
import { SavingThrow, SavingThrowType } from "../types/saves"

type DefenseState = {
	armorBonus: number,
	shieldBonus: number,
	naturalArmorBonus: number,
	deflectionBonus: number,
	miscMod: number,
	otherACMods: string,
	maxHitPoints: number,
	currentHitPoints: number,
	nonLethalDamage: number,
	damageReduction: number,
	spellResistance: number,
	saves: Record<SavingThrowType, SavingThrow>,
	resistances: string,
	immunities: string,
	combatManueverDefense: number,
	miscCMDMod: number,
	tempCMDMod: number
}

const initialState: DefenseState = {
	armorBonus: 0,
	shieldBonus: 0,
	naturalArmorBonus: 0,
	deflectionBonus: 0,
	miscMod: 0,
	otherACMods: "",
	maxHitPoints: 0,
	currentHitPoints: 0,
	nonLethalDamage: 0,
	damageReduction: 0,
	spellResistance: 0,
	saves: {
		[SavingThrowType.FORTITUDE]: {ability: AbilityTag.CON, base: 0, miscMod: 0, tempMod: 0, otherMods: ""},
		[SavingThrowType.REFLEX]: {ability: AbilityTag.DEX, base: 0, miscMod: 0, tempMod: 0, otherMods: ""},
		[SavingThrowType.WILL]: {ability: AbilityTag.WIS, base: 0, miscMod: 0, tempMod: 0, otherMods: ""}
	},
	resistances: "",
	immunities: "",
	combatManueverDefense: 0,
	miscCMDMod: 0,
	tempCMDMod: 0
}

export const defenseSlice = createSlice({
	name: 'generalInfo',
	initialState,
	reducers: {
		setArmorBonus: (state, action: PayloadAction<number>) => {
			state.armorBonus = action.payload;
		},
		setShieldBonus: (state, action: PayloadAction<number>) => {
			state.shieldBonus = action.payload;
		},
		setNaturalArmorBonus: (state, action: PayloadAction<number>) => {
			state.naturalArmorBonus = action.payload;
		},
		setDeflectionBonus: (state, action: PayloadAction<number>) => {
			state.deflectionBonus = action.payload;
		},
		setMiscMod: (state, action: PayloadAction<number>) => {
			state.miscMod = action.payload;
		},
		setOtherACMods: (state, action: PayloadAction<string>) => {
			state.otherACMods = action.payload;
		},
		setMaxHitPoints: (state, action: PayloadAction<number>) => {
			state.maxHitPoints = action.payload;
		},
		setCurrentHitPoints: (state, action: PayloadAction<number>) => {
			state.currentHitPoints = action.payload;
		},
		setNonLethalDamage: (state, action: PayloadAction<number>) => {
			state.nonLethalDamage = action.payload;
		},
		setDamageReduction: (state, action: PayloadAction<number>) => {
			state.damageReduction = action.payload;
		},
		setSpellResistance: (state, action: PayloadAction<number>) => {
			state.spellResistance = action.payload;
		},
		setSave: (state, action: PayloadAction<{type: SavingThrowType, save: SavingThrow}>) => {
			console.log("action", action)
			state.saves[action.payload.type] = action.payload.save;
		},
		setResistances: (state, action: PayloadAction<string>) => {
			state.resistances = action.payload;
		},
		setImmunities: (state, action: PayloadAction<string>) => {
			state.immunities = action.payload;
		},
		setCombatManeuverDefense: (state, action: PayloadAction<number>) => {
			state.combatManueverDefense = action.payload;
		},
		setMiscCMDMod: (state, action: PayloadAction<number>) => {
			state.miscCMDMod = action.payload;
		},
		setTempCMDMod: (state, action: PayloadAction<number>) => {
			state.tempCMDMod = action.payload;
		}
	}
});

export const {
	setArmorBonus,
	setShieldBonus,
	setNaturalArmorBonus,
	setDeflectionBonus,
	setMiscMod,
	setOtherACMods,
	setMaxHitPoints,
	setCurrentHitPoints,
	setNonLethalDamage,
	setDamageReduction,
	setSpellResistance,
	setSave,
	setResistances,
	setImmunities,
	setCombatManeuverDefense,
	setMiscCMDMod,
	setTempCMDMod
} = defenseSlice.actions;

export const selectDefense = (state: RootState) => state.defense;

export const selectArmorClass = (state: RootState) => {
	const { armorBonus, naturalArmorBonus, deflectionBonus } = state.defense;
	const sizeBonus = state.app.sizes[state.generalInfo.size].mod;
	const dexMod = getAbilityMod(state.abilityScores.DEX);
	return 10 + armorBonus + naturalArmorBonus + deflectionBonus + sizeBonus + dexMod;
}

export const selectTouchAC = (state: RootState): number => {
	const armorBonus = state.defense.armorBonus;
	return selectArmorClass(state) - armorBonus;
}

export const selectFlatFootedAC = (state: RootState): number => {
	const dexMod = getAbilityMod(state.abilityScores.DEX);
	return selectArmorClass(state) - dexMod;
}

export const selectCMD = (state: RootState) => {
	const baseAttackBonus = state.offense.baseAttackBonus;
	const strMod = getAbilityMod(state.abilityScores.STR);
	const dexMod = getAbilityMod(state.abilityScores.DEX);
	const specialSizeBonus = state.app.sizes[state.generalInfo.size].specialMod;
	return 10 + baseAttackBonus + strMod + dexMod + specialSizeBonus + state.defense.miscCMDMod + state.defense.tempCMDMod;
}

export default defenseSlice.reducer;