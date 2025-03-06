export function getAbilityMod(abilityScore: number) : number {
	return Math.trunc((abilityScore - 10) / 2);
}