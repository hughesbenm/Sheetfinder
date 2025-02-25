import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store";
import { CreatureSize } from "../../types/sizes";

const initialState = {
	characterName: "Test",
	alignment: "",
	playerName: "",
	race: "",
	size: CreatureSize.MEDIUM,
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
		setRace: (state, action: PayloadAction<string>) => {
			state.race = action.payload;
		},
		setSize: (state, action: PayloadAction<CreatureSize>) => {
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