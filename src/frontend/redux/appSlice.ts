import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store";
import { BaseCreatureSizes, CreatureSize } from "../types/sizes";

interface AppState {
	//TODO: Reword back into indexed-type stuff [key: string]: CreatureSize
	sizes: CreatureSize[]
}

const initialState: AppState = {
	sizes: BaseCreatureSizes
}

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		addCreatureSize: (state, action: PayloadAction<CreatureSize>) => {
			state.sizes.push(action.payload);
		},
	}
})

export const {
	addCreatureSize
} = appSlice.actions;

export const selectSizes = (state: RootState) => state.app.sizes;

export default appSlice.reducer;