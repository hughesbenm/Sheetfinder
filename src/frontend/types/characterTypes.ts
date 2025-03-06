export enum AbilityTag {
	STR = "STR",
	DEX = "DEX",
	CON = "CON",
	INT = "INT",
	WIS = "WIS",
	CHA = "CHA"
}

export enum AbilityName {
	STRENGTH = "Strength",
	DEXTERITY = "Dexterity",
	CONSTITUTION = "Constitution",
	INTELLIGENCE = "Intelligence",
	WISDOM = "Wisdom",
	CHARISMA = "Charisma"
}

export type AbilityScores = Record<AbilityTag, number>;