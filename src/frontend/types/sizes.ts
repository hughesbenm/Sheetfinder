import { selectGeneralInfo } from "../redux/generalSlice";
import { useAppSelector } from "../redux/store";

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

export type CreatureSizeList = { [ creatureSize : string ] : CreatureSize }

export const BaseCreatureSizes: CreatureSizeList = {
	fine: {
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
	diminutive: {
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
	tiny: {
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
	small: {
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
	medium: {
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
	largeTall: {
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
	largeLong: {
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
	hugeTall: {
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
	hugeLong: {
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
	gargTall: {
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
	gargLarge: {
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
	colTall: {
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
	colLong: {
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
}

export const BaseCreatureSizeNames = Object.keys(BaseCreatureSizes);


export const biggerThan = (sizeOne: string, sizeTwo: string): boolean => {
	if (!(BaseCreatureSizeNames.includes(sizeOne))) {
		console.error("Attempted to compute with unrecognized size: '" + sizeOne + "'. Valid sizes: " + BaseCreatureSizeNames);
		throw Error("Attempted to compute with unrecognized size: " + sizeOne + ". Valid sizes: [" + BaseCreatureSizeNames + "]")
	}

	if (!(BaseCreatureSizeNames.includes(sizeTwo))) {
		console.error("Attempted to compute with unrecognized size: '" + sizeTwo + "'. Valid sizes: " + BaseCreatureSizeNames);
		throw Error("Attempted to compute with unrecognized size: " + sizeTwo + ". Valid sizes: [" + BaseCreatureSizeNames + "]")
	}
	
	const indexOne = BaseCreatureSizeNames.indexOf(sizeOne);

	const indexTwo = BaseCreatureSizeNames.indexOf(sizeTwo);

	return indexOne > indexTwo;
}

export const smallerThan = (sizeName: string): boolean => {
	if (!(BaseCreatureSizeNames.includes(sizeName))) {
		console.error("Attempted to compute with unrecognized size: '" + sizeName + "'. Valid sizes: " + BaseCreatureSizeNames);
		throw Error("Attempted to compute with unrecognized size: " + sizeName + ". Valid sizes: [" + BaseCreatureSizeNames + "]")
	}
	
	const size = useAppSelector(selectGeneralInfo).size;
	const currentSizeIndex = BaseCreatureSizeNames.indexOf(size);

	const targetSizeIndex = BaseCreatureSizeNames.indexOf(sizeName);
	
	return currentSizeIndex < targetSizeIndex;
}