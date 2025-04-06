import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store";
import { BaseCreatureSizes, CreatureSize } from "../types/sizes";

interface GeneralState {
	characterName: string,
	alignment: string,
	playerName: string,
	class: string,
	deity: string,
	homeland: string,
	race: string,
	size: string, //TODO: Reword back into indexed-type stuff [key: string]: CreatureSize
	gender: string,
	age: string,
	height: string,
	weight: string,
	hair: string,
	eyes: string,
}

const initialState: GeneralState = {
	characterName: "Test",
	alignment: "",
	playerName: "",
	class: "",
	deity: "",
	homeland: "",
	race: "",
	size: "medium",
	gender: "",
	age: "",
	height: "",
	weight: "",
	hair: "",
	eyes: "",
}

export const generalInfoSlice = createSlice({
	name: 'generalInfo',
	initialState,
	reducers: {
		setCharacterName: (state, action: PayloadAction<string>) => {
			state.characterName = action.payload;
		},
		setAlignment: (state, action: PayloadAction<string>) => {
			state.alignment = action.payload;
		},
		setPlayerName: (state, action: PayloadAction<string>) => {
			state.playerName = action.payload;
		},
		setClass: (state, action: PayloadAction<string>) => {
			state.class = action.payload;
		},
		setDeity: (state, action) => {
			state.deity = action.payload;
		},
		setHomeland: (state, action: PayloadAction<string>) => {
			state.homeland = action.payload;
		},
		setRace: (state, action: PayloadAction<string>) => {
			state.race = action.payload;
		},
		setSize: (state, action: PayloadAction<string>) => {
			state.size = action.payload;
		},
		setGender: (state, action: PayloadAction<string>) => {
			state.gender = action.payload;
		},
		setAge: (state, action: PayloadAction<string>) => {
			state.age = action.payload;
		},
		setHeight: (state, action: PayloadAction<string>) => {
			state.height = action.payload;
		},
		setWeight: (state, action: PayloadAction<string>) => {
			state.weight = action.payload;
		},
		setHair: (state, action: PayloadAction<string>) => {
			state.hair = action.payload;
		},
		setEyes: (state, action: PayloadAction<string>) => {
			state.eyes = action.payload;
		}
	}
})

export const {
	setCharacterName,
	setAlignment,
	setPlayerName,
	setClass,
	setDeity,
	setHomeland,
	setSize,
	setRace,
	setGender,
	setAge,
	setHeight,
	setWeight,
	setHair,
	setEyes
} = generalInfoSlice.actions;

export const selectGeneralInfo = (state: RootState) => state.generalInfo;

export const selectSize = (state: RootState) => {
	return state.app.sizes[state.generalInfo.size];
} 

export default generalInfoSlice.reducer;