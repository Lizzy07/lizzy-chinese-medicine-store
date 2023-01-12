import pic1 from "../../../images/石斛.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "石斛",
	taste: ["甘"],
	chillsOrfever: "性平",
	originPlace: "四川湖南湖北安徽等地",
	taboo: "多服能寒胃，大便溏薄",
	images: [pic1],
	dosage: '普通一钱至三钱',
	appendix: "阴虚（肌肉没了），阳虚（走路没力气）",
	content: () => {
		return (<div>主治：除热滋阴要药。补虚劳，退虚热。</div>)
	},
};

export default medicineData;
