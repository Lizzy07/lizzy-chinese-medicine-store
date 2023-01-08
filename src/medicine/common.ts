export const colorMap = {
  "苦": "red",
  "酸": "green",
  "甘": "gold",
  "辛": "",
  "咸": "balck",
  "淡": "purple",
}
export type ColorMap =  keyof typeof colorMap;
export interface MedicineType {
	name: string;
	taste: ColorMap[];
	chillsOrfever: string;
	originPlace: string;
	taboo: string;
	images: string[];
	appendix: string;
	content: () => JSX.Element;
}