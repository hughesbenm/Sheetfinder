import { selectGeneralInfo } from "../redux/generalSlice";
import { useAppSelector } from "../redux/store";
import { AbilityTag } from "./characterTypes";

export type Skill = {
	skillName: string,
	trained: boolean,
	classSkill: boolean,
	ability: AbilityTag,
	ranks: number,
	racialBonus: number,
	traitBonus: number,
	miscBonus: number
}

export type SkillList = { [ creatureSize : string ] : Skill }

export const BaseSkills: SkillList = {
	acrobatics: {
		skillName: "Acrobatics",
		trained: false,
		classSkill: false,
		ability: AbilityTag.DEX,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	appraise: {
		skillName: "Appraise",
		trained: false,
		classSkill: false,
		ability: AbilityTag.INT,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	bluff: {
		skillName: "Bluff",
		trained: false,
		classSkill: false,
		ability: AbilityTag.CHA,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	climb: {
		skillName: "Climb",
		trained: false,
		classSkill: false,
		ability: AbilityTag.STR,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	diplomacy: {
		skillName: "Diplomacy",
		trained: false,
		classSkill: false,
		ability: AbilityTag.CHA,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	disableDevice: {
		skillName: "Disable Device",
		trained: false,
		classSkill: false,
		ability: AbilityTag.DEX,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	disguise: {
		skillName: "Disguise",
		trained: false,
		classSkill: false,
		ability: AbilityTag.CHA,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	escapeArtist: {
		skillName: "Escape Artist",
		trained: false,
		classSkill: false,
		ability: AbilityTag.DEX,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	fly: {
		skillName: "Fly",
		trained: false,
		classSkill: false,
		ability: AbilityTag.DEX,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	handleAnimal: {
		skillName: "Handle Animal",
		trained: false,
		classSkill: false,
		ability: AbilityTag.CHA,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	heal: {
		skillName: "Heal",
		trained: false,
		classSkill: false,
		ability: AbilityTag.WIS,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	intimidate: {
		skillName: "Intimidate",
		trained: false,
		classSkill: false,
		ability: AbilityTag.CHA,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	knowledgeArcana: {
		skillName: "Knowledge (Arcana)",
		trained: false,
		classSkill: false,
		ability: AbilityTag.INT,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	knowledgeDungeoneering: {
		skillName: "Knowledge (Dungeoneering)",
		trained: false,
		classSkill: false,
		ability: AbilityTag.INT,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	knowledgeEngineering: {
		skillName: "Knowledge (Engineering)",
		trained: false,
		classSkill: false,
		ability: AbilityTag.INT,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	knowledgeGeography: {
		skillName: "Knowledge (Geography)",
		trained: false,
		classSkill: false,
		ability: AbilityTag.INT,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	knowledgeHistory: {
		skillName: "Knowledge (History)",
		trained: false,
		classSkill: false,
		ability: AbilityTag.INT,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	knowledgeLocal: {
		skillName: "Knowledge (Local)",
		trained: false,
		classSkill: false,
		ability: AbilityTag.INT,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	knowledgeNature: {
		skillName: "Knowledge (Nature)",
		trained: false,
		classSkill: false,
		ability: AbilityTag.INT,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	knowledgeNobility: {
		skillName: "Knowledge (Nobility)",
		trained: false,
		classSkill: false,
		ability: AbilityTag.INT,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	knowledgePlanes: {
		skillName: "Knowledge (Planes)",
		trained: false,
		classSkill: false,
		ability: AbilityTag.INT,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	knowledgeReligion: {
		skillName: "Knowledge (Religion)",
		trained: false,
		classSkill: false,
		ability: AbilityTag.INT,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	linguistics: {
		skillName: "Linguistics",
		trained: false,
		classSkill: false,
		ability: AbilityTag.INT,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	perception: {
		skillName: "Perception",
		trained: false,
		classSkill: false,
		ability: AbilityTag.WIS,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	ride: {
		skillName: "Ride",
		trained: false,
		classSkill: false,
		ability: AbilityTag.DEX,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	senseMotive: {
		skillName: "Sense Motive",
		trained: false,
		classSkill: false,
		ability: AbilityTag.WIS,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	sleightOfHand: {
		skillName: "Sleight of Hand",
		trained: false,
		classSkill: false,
		ability: AbilityTag.DEX,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	spellcraft: {
		skillName: "Spellcraft",
		trained: false,
		classSkill: false,
		ability: AbilityTag.INT,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	stealth: {
		skillName: "Stealth",
		trained: false,
		classSkill: false,
		ability: AbilityTag.DEX,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	survival: {
		skillName: "Survival",
		trained: false,
		classSkill: false,
		ability: AbilityTag.WIS,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	swim: {
		skillName: "Swim",
		trained: false,
		classSkill: false,
		ability: AbilityTag.STR,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	useMagicDevice: {
		skillName: "Use Magic Device",
		trained: false,
		classSkill: false,
		ability: AbilityTag.CHA,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
}

export const BaseCreatureSizeNames = Object.keys(BaseSkills);