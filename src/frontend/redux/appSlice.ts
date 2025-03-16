import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store";
import { BaseCreatureSizes, CreatureSize, CreatureSizeList } from "../types/sizes";

interface AppState {
	//TODO: Reword back into indexed-type stuff [key: string]: CreatureSize
	sizes: CreatureSizeList
}

const initialState: AppState = {
	sizes: BaseCreatureSizes
}

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		addCreatureSize: (state, action: PayloadAction<{sizeName: string, size: CreatureSize}>) => {
			if (state.sizes[action.payload.sizeName]) {
				console.error("Attempted to add Creature Size with sizeName that already exists");
				throw Error("Attempted to add Creature Size with sizeName that already exists")
			}
			state.sizes[action.payload.sizeName] = action.payload.size;
		},
	}
})

export const {
	addCreatureSize
} = appSlice.actions;

export const selectSizes = (state: RootState) => state.app.sizes;

export default appSlice.reducer;