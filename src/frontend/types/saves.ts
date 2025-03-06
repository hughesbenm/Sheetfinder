import { AbilityTag } from "./characterTypes"

export enum SavingThrowType {
	FORTITUDE = "Fortitude",
	REFLEX = "Reflex",
	WILL = "Will"
}

export type SavingThrow = {
	ability: AbilityTag,
	base: number,
	miscMod: number,
	tempMod: number,
	otherMods: string
} 