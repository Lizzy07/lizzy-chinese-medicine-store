import pic1 from "../../../images/地榆.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "地榆",
	taste: ["苦"],
	chillsOrfever: "性微寒",
	originPlace: "",
	taboo: "",
	images: [pic1],
	dosage: '',
	appendix: "主要是大肠",
	content: () => {
		return (<div>主治：止血收敛要药。</div>)
	},
};

export default medicineData;
