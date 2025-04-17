import { createSlice, current, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { AbilityName, AbilityTag, AbilityScores } from '../types/characterTypes';
import { getAbilityMod } from '../util/getAbilityMod';
import { BaseSkills, SkillList } from '../types/skill';
import { styleText } from 'util';

interface SkillsState {
	skills: SkillList,
	languages: string,
	totalXp: number,
	xpToNext: number
}

const initialState: SkillsState = {
	skills: BaseSkills,
	languages: "",
	totalXp: 0,
	xpToNext: 0
}

export const skillsSlice = createSlice({
	name: 'skillsSlice',
	initialState,
	reducers: {
		setRanks: (state, action: PayloadAction<{skillName: string, newRanks: number}>) => {
			state.skills[action.payload.skillName].ranks = action.payload.newRanks;
		},
		setClassSkill: (state, action: PayloadAction<{skillName: string, isClassSkill: boolean}>) => {
			state.skills[action.payload.skillName].classSkill = action.payload.isClassSkill;
		},
		setRacialBonus: (state, action: PayloadAction<{skillName: string, racialBonus: number}>) => {
			state.skills[action.payload.skillName].racialBonus = action.payload.racialBonus;
		},
		setTraitBonus: (state, action: PayloadAction<{skillName: string, traitBonus: number}>) => {
			state.skills[action.payload.skillName].traitBonus = action.payload.traitBonus;
		},
		setMiscBonus: (state, action: PayloadAction<{skillName: string, miscBonus: number}>) => {
			state.skills[action.payload.skillName].miscBonus = action.payload.miscBonus;
		},
		setLanguages: (state, action: PayloadAction<string>) => {
			state.languages = action.payload;
		},
		setXPTotal: (state, action: PayloadAction<number>) => {
			state.totalXp = action.payload;
		},
		setXPNext: (state, action: PayloadAction<number>) => {
			state.xpToNext = action.payload;
		}
	}
});

export const {
	setRanks,
	setClassSkill,
	setRacialBonus,
	setTraitBonus,
	setMiscBonus,
	setLanguages,
	setXPTotal,
	setXPNext
} = skillsSlice.actions;

export default skillsSlice.reducer;

export const selectSkills = (state: RootState) => { return state.skills.skills; }
