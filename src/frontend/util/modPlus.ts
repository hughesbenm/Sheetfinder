export const modPlus = (value: number) => {
	if (value >= 0) {
		return "+" + value.toString();
	}
	return value.toString();
}