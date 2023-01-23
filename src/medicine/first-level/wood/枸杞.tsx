import pic1 from "../../../images/枸杞.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "枸杞",
	taste: ["甘", "苦"],
	chillsOrfever: "性平",
	originPlace: "",
	taboo: "",
	images: [pic1],
	dosage: '',
	appendix: "",
	content: () => {
		return (<div>主治：滋肾养肝、生精润肺要药。主五内邪热，治虚劳，明目。</div>)
	},
};

export default medicineData;
