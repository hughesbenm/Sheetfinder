import { selectGeneralInfo } from "../redux/generalSlice";
import { useAppSelector } from "../redux/store";
import { AbilityTag } from "./characterTypes";

export type Skill = {
	name: string,
	specialty?: string,
	trained: boolean,
	classSkill: boolean,
	ability: AbilityTag,
	ranks: number,
	racialBonus: number,
	traitBonus: number,
	miscBonus: number
}

export type SkillList = { [ skillName : string ] : Skill }

export enum BaseSkillNames {
	ACROBATICS = "Acrobatics",
	APPRAISE = "Appraise",
	BLUFF = "Bluff",
	CLIMB = "Climb",
	DIPLOMACY = "Diplomacy",
	DISABLE_DEVICE = "Disable Device",
	DISGUISE = "Disguise",
	ESCAPE_ARTIST = "Escape Artist",
	FLY = "Fly",
	HANDLE_ANIMAL = "Handle Animal",
	HEAL = "Heal",
	INTIMIDATE = "Intimidate",
	KNOWLEDGE_ARCANA = "Knowledge (Arcane)",
	KNOWLEDGE_DUNGEONEERING = "Knowledge (Dungeoneering)",
	KNOWLEDGE_ENGINEERING = "Knowledge (Engineering)",
	KNOWLEDGE_GEOGRAPHY = "Knowledge (Geography)",
	KNOWLEDGE_HISTORY = "Knowledge (History)",
	KNOWLEDGE_LOCAL = "Knowledge (Local)",
	KNOWLEDGE_NATURE = "Knowledge (Nature)",
	KNOWLEDGE_NOBILITY = "Knowledge (Nobility)",
	KNOWLEDGE_PLANES = "Knowledge (Planes)",
	KNOWLEDGE_RELIGION = "Knowledge (Religion)",
	LINGUISTICS = "Linguistics",
	PERCEPTION = "Perception",
	RIDE = "Ride",
	SENSE_MOTIVE = "Sense Motive",
	SLEIGHT_OF_HAND = "Sleight of Hand",
	SPELLCRAFT = "Spellcraft",
	STEALTH = "Stealth",
	SURVIVAL = "Survival",
	SWIM = "Swim",
	USE_MAGIC_DEVICE = "Use Magic Device"
}

export const BaseSkills: SkillList = {
	[BaseSkillNames.ACROBATICS]: {
		name: BaseSkillNames.ACROBATICS,
		trained: false,
		classSkill: false,
		ability: AbilityTag.DEX,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	[BaseSkillNames.APPRAISE]: {
		name: BaseSkillNames.APPRAISE,
		trained: false,
		classSkill: false,
		ability: AbilityTag.INT,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	[BaseSkillNames.BLUFF]: {
		name: BaseSkillNames.BLUFF,
		trained: false,
		classSkill: false,
		ability: AbilityTag.CHA,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	[BaseSkillNames.CLIMB]: {
		name: BaseSkillNames.CLIMB,
		trained: false,
		classSkill: false,
		ability: AbilityTag.STR,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	[BaseSkillNames.DIPLOMACY]: {
		name: BaseSkillNames.DIPLOMACY,
		trained: false,
		classSkill: false,
		ability: AbilityTag.CHA,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	[BaseSkillNames.DISABLE_DEVICE]: {
		name: BaseSkillNames.DISABLE_DEVICE,
		trained: false,
		classSkill: false,
		ability: AbilityTag.DEX,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	[BaseSkillNames.DISGUISE]: {
		name: BaseSkillNames.DISGUISE,
		trained: false,
		classSkill: false,
		ability: AbilityTag.CHA,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	[BaseSkillNames.ESCAPE_ARTIST]: {
		name: BaseSkillNames.ESCAPE_ARTIST,
		trained: false,
		classSkill: false,
		ability: AbilityTag.DEX,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	[BaseSkillNames.FLY]: {
		name: BaseSkillNames.FLY,
		trained: false,
		classSkill: false,
		ability: AbilityTag.DEX,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	[BaseSkillNames.HANDLE_ANIMAL]: {
		name: BaseSkillNames.HANDLE_ANIMAL,
		trained: false,
		classSkill: false,
		ability: AbilityTag.CHA,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	[BaseSkillNames.HEAL]: {
		name: BaseSkillNames.HEAL,
		trained: false,
		classSkill: false,
		ability: AbilityTag.WIS,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	[BaseSkillNames.INTIMIDATE]: {
		name: BaseSkillNames.INTIMIDATE,
		trained: false,
		classSkill: false,
		ability: AbilityTag.CHA,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	[BaseSkillNames.KNOWLEDGE_ARCANA]: {
		name: BaseSkillNames.KNOWLEDGE_ARCANA,
		trained: false,
		classSkill: false,
		ability: AbilityTag.INT,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	[BaseSkillNames.KNOWLEDGE_DUNGEONEERING]: {
		name: BaseSkillNames.KNOWLEDGE_DUNGEONEERING,
		trained: false,
		classSkill: false,
		ability: AbilityTag.INT,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	[BaseSkillNames.KNOWLEDGE_ENGINEERING]: {
		name: BaseSkillNames.KNOWLEDGE_ENGINEERING,
		trained: false,
		classSkill: false,
		ability: AbilityTag.INT,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	[BaseSkillNames.KNOWLEDGE_GEOGRAPHY]: {
		name: BaseSkillNames.KNOWLEDGE_GEOGRAPHY,
		trained: false,
		classSkill: false,
		ability: AbilityTag.INT,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	[BaseSkillNames.KNOWLEDGE_HISTORY]: {
		name: BaseSkillNames.KNOWLEDGE_HISTORY,
		trained: false,
		classSkill: false,
		ability: AbilityTag.INT,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	[BaseSkillNames.KNOWLEDGE_LOCAL]: {
		name: BaseSkillNames.KNOWLEDGE_LOCAL,
		trained: false,
		classSkill: false,
		ability: AbilityTag.INT,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	[BaseSkillNames.KNOWLEDGE_NATURE]: {
		name: BaseSkillNames.KNOWLEDGE_NATURE,
		trained: false,
		classSkill: false,
		ability: AbilityTag.INT,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	[BaseSkillNames.KNOWLEDGE_NOBILITY]: {
		name: BaseSkillNames.KNOWLEDGE_NOBILITY,
		trained: false,
		classSkill: false,
		ability: AbilityTag.INT,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	[BaseSkillNames.KNOWLEDGE_PLANES]: {
		name: BaseSkillNames.KNOWLEDGE_PLANES,
		trained: false,
		classSkill: false,
		ability: AbilityTag.INT,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	[BaseSkillNames.KNOWLEDGE_RELIGION]: {
		name: BaseSkillNames.KNOWLEDGE_RELIGION,
		trained: false,
		classSkill: false,
		ability: AbilityTag.INT,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	[BaseSkillNames.LINGUISTICS]: {
		name: BaseSkillNames.LINGUISTICS,
		trained: false,
		classSkill: false,
		ability: AbilityTag.INT,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	[BaseSkillNames.PERCEPTION]: {
		name: BaseSkillNames.PERCEPTION,
		trained: false,
		classSkill: false,
		ability: AbilityTag.WIS,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	[BaseSkillNames.RIDE]: {
		name: BaseSkillNames.RIDE,
		trained: false,
		classSkill: false,
		ability: AbilityTag.DEX,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	[BaseSkillNames.SENSE_MOTIVE]: {
		name: BaseSkillNames.SENSE_MOTIVE,
		trained: false,
		classSkill: false,
		ability: AbilityTag.WIS,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	[BaseSkillNames.SLEIGHT_OF_HAND]: {
		name: BaseSkillNames.SLEIGHT_OF_HAND,
		trained: false,
		classSkill: false,
		ability: AbilityTag.DEX,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	[BaseSkillNames.SPELLCRAFT]: {
		name: BaseSkillNames.SPELLCRAFT,
		trained: false,
		classSkill: false,
		ability: AbilityTag.INT,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	[BaseSkillNames.STEALTH]: {
		name: BaseSkillNames.STEALTH,
		trained: false,
		classSkill: false,
		ability: AbilityTag.DEX,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	[BaseSkillNames.SURVIVAL]: {
		name: BaseSkillNames.SURVIVAL,
		trained: false,
		classSkill: false,
		ability: AbilityTag.WIS,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	[BaseSkillNames.SWIM]: {
		name: BaseSkillNames.SWIM,
		trained: false,
		classSkill: false,
		ability: AbilityTag.STR,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
	[BaseSkillNames.USE_MAGIC_DEVICE]: {
		name: BaseSkillNames.USE_MAGIC_DEVICE,
		trained: false,
		classSkill: false,
		ability: AbilityTag.CHA,
		ranks: 0,
		racialBonus: 0,
		traitBonus: 0,
		miscBonus: 0
	},
}