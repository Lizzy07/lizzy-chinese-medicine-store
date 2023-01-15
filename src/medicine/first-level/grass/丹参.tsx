import pic1 from "../../../images/丹参.webp";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "丹参",
	taste: ["苦"],
	chillsOrfever: "性微寒",
	originPlace: "陕西一带，作心脏形，根紫赤色，入药",
	taboo: "畏咸水，反藜芦",
	images: [pic1],
	dosage: '普通二钱至三四钱，大剂量一两',
	appendix: "丹参为女子调经良药，故有一味丹参功兼四物汤",
	content: () => {
		return (<div>主治：活血化淤（女性小腹刺痛，有淤血在里面）、安胎御气、入心养血。</div>)
	},
};

export default medicineData;
