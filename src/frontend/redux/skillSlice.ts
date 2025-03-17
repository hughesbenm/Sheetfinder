import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { AbilityName, AbilityTag, AbilityScores } from '../types/characterTypes';
import { getAbilityMod } from '../util/getAbilityMod';
import { BaseSkills, SkillList } from '../types/skill';

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
		setRank: (state, action: PayloadAction<{sizeName: string, newValue: number}>) => {
			state.skills[action.payload.sizeName].ranks = action.payload.newValue;
		}
	}
});

export const {  } = skillsSlice.actions;

export const selectAbilityScores = (state: RootState) => state.abilityScores;
export const selectAbilityMod = (ability: AbilityTag) => (state: RootState) => getAbilityMod(state.abilityScores[ability]);

export default skillsSlice.reducer;
