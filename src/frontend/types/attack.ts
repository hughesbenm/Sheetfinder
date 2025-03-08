
export enum AttackType {
	RANGED = "Ranged",
	MELEE = "Melee"
}

export type Attack = {
	type: AttackType;
	weapon: string;
	bonus: string;
	critical: string;
	range: string;
	damage: string;
	ammo: string;
}