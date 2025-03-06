import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store";

interface OffenseState {
	baseAttackBonus: number,
}

const initialState: OffenseState = {
	baseAttackBonus: 0,
}

export const offenseSlice = createSlice({
	name: 'offense',
	initialState,
	reducers: {
		setBaseAttackBonus: (state, action: PayloadAction<number>) => {
			console.log(state.baseAttackBonus)
			state.baseAttackBonus = action.payload;
		}
	}
})

export const {
	setBaseAttackBonus
} = offenseSlice.actions;

export const selectOffense = (state: RootState) => state.offense;

export default offenseSlice.reducer;