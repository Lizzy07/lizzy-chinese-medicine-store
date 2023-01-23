import pic1 from "../../../images/黄柏.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "黄柏",
	taste: ["苦"],
	chillsOrfever: "性寒",
	originPlace: "四川，又叫川柏",
	taboo: "",
	images: [pic1],
	dosage: '五分至两钱',
	appendix: "",
	content: () => {
		return (<div>主治：【除热】杀虫，坚肾益阴要药。</div>)
	},
};

export default medicineData;
