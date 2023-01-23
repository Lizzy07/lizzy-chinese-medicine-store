import pic1 from "../../../images/苦参.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "苦参",
	taste: ["苦"],
	chillsOrfever: "性寒",
	originPlace: "河南四川",
	taboo: "",
	images: [pic1],
	dosage: '',
	appendix: "",
	content: () => {
		return (<div>主治：燥湿胜热健胃杀虫要药。</div>)
	},
};

export default medicineData;
