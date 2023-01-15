import pic1 from "../../../images/决明子.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "决明子",
	taste: ["甘", "苦", "咸"],
	chillsOrfever: "性平",
	originPlace: "陕西山西一带",
	taboo: "恶麻仁",
	images: [pic1],
	dosage: '普通一钱至三钱',
	appendix: "平时用决明子炒过后，可泡茶喝",
	content: () => {
		return (<div>主治：泻肝明目要药，能补肝虚泻肝经风热，治一切眼病。</div>)
	},
};

export default medicineData;
