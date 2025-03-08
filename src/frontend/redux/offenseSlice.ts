import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store";
import { getAbilityMod } from "../util/getAbilityMod";
import { Attack, AttackType } from "../types/attack";

interface OffenseState {
	miscInitMod: number;
	baseAttackBonus: number;
	modsAndNotes: string;
	landSpeed: number;
	armorSpeed: number;
	flySpeed: number;
	climbSpeed: number;
	burrowSpeed: number;
	speedModsAndNotes: string;
	miscCMBMod: number;
	tempCMBMod: string;
	attacks: Attack[];
}

const initialState: OffenseState = {
	miscInitMod: 0,
	baseAttackBonus: 0,
	modsAndNotes: "",
	landSpeed: 30,
	armorSpeed: 30,
	flySpeed: 0,
	climbSpeed: 0,
	burrowSpeed: 0,
	speedModsAndNotes: "",
	miscCMBMod: 0,
	tempCMBMod: "",
	attacks: []
}

export const offenseSlice = createSlice({
	name: 'offense',
	initialState,
	reducers: {
		setMiscInitMod: (state, action: PayloadAction<number>) => {
			state.miscInitMod = action.payload;
		},
		setBaseAttackBonus: (state, action: PayloadAction<number>) => {
			state.baseAttackBonus = action.payload;
		},
		setModsAndNotes: (state, action: PayloadAction<string>) => {
			state.modsAndNotes = action.payload;
		},
		setLandSpeed: (state, action: PayloadAction<number>) => {
			state.landSpeed = action.payload;
		},
		setArmorSpeed: (state, action: PayloadAction<number>) => {
			state.armorSpeed = action.payload;
		},
		setFlySpeed: (state, action: PayloadAction<number>) => {
			state.flySpeed = action.payload;
		},
		setClimbSpeed: (state, action: PayloadAction<number>) => {
			state.climbSpeed = action.payload;
		},
		setBurrowSpeed: (state, action: PayloadAction<number>) => {
			state.burrowSpeed = action.payload;
		},
		setSpeedModsAndNotes: (state, action: PayloadAction<string>) => {
			state.speedModsAndNotes = action.payload;
		},
		setMiscCMBMod: (state, action: PayloadAction<number>) => {
			state.miscCMBMod = action.payload;
		},
		setTempCMBMod: (state, action: PayloadAction<string>) => {
			state.tempCMBMod = action.payload;
		},
		addEmptyAttack: (state, action: PayloadAction<AttackType>) => {
			state.attacks.push({
				type: action.payload,
				weapon: "",
				bonus: "",
				damage: "",
				critical: "",
				range: "",
				ammo: ""
			});
		},
		addAttack: (state, action: PayloadAction<Attack>) => {
			state.attacks.push(action.payload)
		},
		setAttackWeapon: (state, action: PayloadAction<{index: number, newWeapon: string}>) => {
			state.attacks[action.payload.index].weapon = action.payload.newWeapon;
		},
		setAttackBonus: (state, action: PayloadAction<{index: number, newBonus: string}>) => {
			state.attacks[action.payload.index].bonus = action.payload.newBonus;
		},
		setAttackDamage: (state, action: PayloadAction<{index: number, newDamage: string}>) => {
			state.attacks[action.payload.index].damage = action.payload.newDamage;
		},
		setAttackCritical: (state, action: PayloadAction<{index: number, newCritical: string}>) => {
			state.attacks[action.payload.index].critical = action.payload.newCritical;
		},
		setAttackRange: (state, action: PayloadAction<{index: number, newRange: string}>) => {
			state.attacks[action.payload.index].range = action.payload.newRange;
		},
		setAttackAmmo: (state, action: PayloadAction<{index: number, newAmmo: string}>) => {
			state.attacks[action.payload.index].ammo = action.payload.newAmmo;
		}
	}
})

export const {
	setMiscInitMod,
	setBaseAttackBonus,
	setModsAndNotes,
	setLandSpeed,
	setArmorSpeed,
	setFlySpeed,
	setClimbSpeed,
	setBurrowSpeed,
	setSpeedModsAndNotes,
	setMiscCMBMod,
	setTempCMBMod,
	addEmptyAttack,
	addAttack,
	setAttackWeapon,
	setAttackBonus,
	setAttackDamage,
	setAttackCritical,
	setAttackRange,
	setAttackAmmo
} = offenseSlice.actions;

export const selectOffense = (state: RootState) => state.offense;

export const selectInitiative = (state: RootState) => {
	const dexMod = getAbilityMod(state.abilityScores.DEX);
	return dexMod + state.offense.miscInitMod;
}

export const selectCMB = (state: RootState) => {
	const { baseAttackBonus, miscCMBMod } = state.offense;
	const relevantMod = getAbilityMod(state.generalInfo.size <= 2 ? state.abilityScores.DEX : state.abilityScores.STR)
	const specialSizeBonus = state.app.sizes[state.generalInfo.size].specialMod;
	return baseAttackBonus + miscCMBMod + relevantMod + specialSizeBonus;
}

export default offenseSlice.reducer;