import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { AbilityName, AbilityTag, AbilityScores } from '../../types/characterTypes';

const initialState: AbilityScores = {
		[AbilityTag.STR]: 10,
		[AbilityTag.DEX]: 12,
		[AbilityTag.CON]: 14,
		[AbilityTag.INT]: 16,
		[AbilityTag.WIS]: 18,
		[AbilityTag.CHA]: 20,
}

export const abilityScoreSlice = createSlice({
	name: 'abilityScores',
	initialState,
	reducers: {
		increment: (state, action: PayloadAction<AbilityTag>) => {
			state[action.payload] += 1;
		},
		decrement: (state, action: PayloadAction<AbilityTag>) => {
			state[action.payload] -= 1;
		},
		setTo: (state, action: PayloadAction<{ abilityTag: AbilityTag; value: number }>) => {
			state[action.payload.abilityTag] = action.payload.value;
		},
	}
})

export const { increment, decrement, setTo } = abilityScoreSlice.actions;

export const selectAbilityScores = (state: RootState) => state.abilityScores;

export default abilityScoreSlice.reducer;

