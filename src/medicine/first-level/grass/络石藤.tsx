import pic1 from "../../../images/络石藤.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "络石藤",
	taste: ["苦"],
	chillsOrfever: "性微寒",
	originPlace: "",
	taboo: "",
	images: [pic1],
	dosage: '普通一钱至三钱',
	appendix: "开喉咙",
	content: () => {
		return (<div>主治：风热痈肿，凉血退热，舒筋活络。</div>)
	},
};

export default medicineData;
