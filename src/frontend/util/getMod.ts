export function getMod(abilityScore: number) : number {
	return Math.trunc((abilityScore - 10) / 2);
}