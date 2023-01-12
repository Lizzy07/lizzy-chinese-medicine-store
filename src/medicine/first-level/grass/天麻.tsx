import pic1 from "../../../images/天麻.jpeg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "天麻",
	taste: ["辛"],
	chillsOrfever: "性平",
	originPlace: "四川及各地",
	taboo: "",
	images: [pic1],
	dosage: '普通八分至二三钱',
	appendix: "",
	content: () => {
		return (<div>主治：祛风镇抽筋。</div>)
	},
};

export default medicineData;
