import { selectGeneralInfo } from "../redux/generalSlice";
import { useAppSelector } from "../redux/store";
import { BaseCreatureSizeNames } from "../types/sizes";

export const biggerThan = (sizeName: string): boolean => {
	const size = useAppSelector(selectGeneralInfo).size;

	if (!(sizeName in BaseCreatureSizeNames)) {
		console.error("Attempted to compute with unrecognized size: " + sizeName + ". Valid sizes: " + BaseCreatureSizeNames);
		throw Error("Attempted to compute with unrecognized size: " + sizeName + ". Valid sizes: " + BaseCreatureSizeNames)
	}
	const targetSizeIndex = BaseCreatureSizeNames.indexOf(sizeName);
	const currentSizeIndex = BaseCreatureSizeNames.indexOf(size);
	return currentSizeIndex > targetSizeIndex;
}