import pic1 from "../../../images/蒲黄.jpeg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "蒲黄粉",
	taste: ["甘", "辛"],
	chillsOrfever: "性温",
	originPlace: "蒲黄乃蒲黄花之花粉，入药",
	taboo: "",
	images: [pic1],
	dosage: '普通七分至二钱',
	appendix: "",
	content: () => {
		return (<div>主治：凉血活血散结除热要药。生用消瘀通经，疗跌打损伤。炒黑用止血止崩。</div>)
	},
};

export default medicineData;
