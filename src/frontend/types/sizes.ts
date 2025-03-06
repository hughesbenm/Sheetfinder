export type CreatureSize = {
	sizeName: string,
	mod: number,
	specialMod: number,
	flyMod: number,
	stealthMod: number,
	space: string,
	naturalReach: number,
	typicalHeightLength: string,
	typicalWeight: string
}

export const BaseCreatureSizes: CreatureSize[] = [
	{
		sizeName: "Fine",
		mod: 8,
		specialMod: -8,
		flyMod: 8,
		stealthMod: 16,
		space: "1/2 ft.",
		naturalReach: 0,
		typicalHeightLength: "6\" or less",
		typicalWeight: "1/8 lb. or less"
	},
	{
		sizeName: "Diminutive",
		mod: 4,
		specialMod: -4,
		flyMod: 6,
		stealthMod: 12,
		space: "1 ft.",
		naturalReach: 0,
		typicalHeightLength: "6\" to 1 ft.",
		typicalWeight: "1/8 lb. to 1 lb."
	},
	{
		sizeName: "Tiny",
		mod: 2,
		specialMod: -2,
		flyMod: 4,
		stealthMod: 8,
		space: "2-1/2 ft.",
		naturalReach: 0,
		typicalHeightLength: "1' to 2 ft.",
		typicalWeight: "1-8 lbs"
	},
	{
		sizeName: "Small",
		mod: 1,
		specialMod: -1,
		flyMod: 2,
		stealthMod: 4,
		space: "5 ft.",
		naturalReach: 5,
		typicalHeightLength: "2' to 4 ft.",
		typicalWeight: "8-60 lbs."
	},
	{
		sizeName: "Medium",
		mod: 0,
		specialMod: 0,
		flyMod: 0,
		stealthMod: 0,
		space: "5 ft.",
		naturalReach: 5,
		typicalHeightLength: "4' to 8 ft.",
		typicalWeight: "60-500 lbs."
	},
	{
		sizeName: "Large (tall)",
		mod: -1,
		specialMod: -1,
		flyMod: -2,
		stealthMod: -4,
		space: "10 ft.",
		naturalReach: 10,
		typicalHeightLength: "8' to 16 ft.",
		typicalWeight: "500-4000 lbs."
	},
	{
		sizeName: "Large (long)",
		mod: -1,
		specialMod: 1,
		flyMod: -2,
		stealthMod: -4,
		space: "10 ft.",
		naturalReach: 5,
		typicalHeightLength: "8' to 16 ft.",
		typicalWeight: "500-4000 lbs."
	},
	{
		sizeName: "Huge (tall)",
		mod: -2,
		specialMod: 2,
		flyMod: -4,
		stealthMod: -8,
		space: "15 ft.",
		naturalReach: 15,
		typicalHeightLength: "16' to 32 ft.",
		typicalWeight: "2-16 tons"
	},
	{
		sizeName: "Huge (long)",
		mod: -2,
		specialMod: 2,
		flyMod: -4,
		stealthMod: -8,
		space: "15 ft.",
		naturalReach: 10,
		typicalHeightLength: "16' to 32 ft.",
		typicalWeight: "2-16 tons"
	},
	{
		sizeName: "Gargantuan (tall)",
		mod: -4,
		specialMod: 4,
		flyMod: -6,
		stealthMod: -12,
		space: "20 ft.",
		naturalReach: 20,
		typicalHeightLength: "32' to 64 ft.",
		typicalWeight: "16 – 125 tons"
	},
	{
		sizeName: "Gargantuan (long)",
		mod: -4,
		specialMod: 4,
		flyMod: -6,
		stealthMod: -12,
		space: "20 ft.",
		naturalReach: 15,
		typicalHeightLength: "32' to 64 ft.",
		typicalWeight: "16 – 125 tons"
	},
	{
		sizeName: "Colossal (tall)",
		mod: -8,
		specialMod: 8,
		flyMod: -8,
		stealthMod: -16,
		space: "30 ft.",
		naturalReach: 30,
		typicalHeightLength: "64 ft. or more",
		typicalWeight: "125 tons or more"
	},
	{
		sizeName: "Colossal (long)",
		mod: -8,
		specialMod: 8,
		flyMod: -8,
		stealthMod: -16,
		space: "30 ft.",
		naturalReach: 20,
		typicalHeightLength: "64 ft. or more",
		typicalWeight: "125 tons or more"
	},
]