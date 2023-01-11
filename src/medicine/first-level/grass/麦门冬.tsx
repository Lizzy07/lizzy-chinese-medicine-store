import pic1 from "../../../images/麦门冬.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "麦门冬",
	taste: ["甘"],
	chillsOrfever: "性微寒",
	originPlace: "根黄白色，入药",
	taboo: "",
	images: [pic1],
	dosage: '普通一钱至三钱',
	appendix: "",
	content: () => {
		return (<div>主治：1、润肺清火要药。口渴。2、眼白发黄--》眼白属肺，发黄，有热。麦门冬清肺热，故能治疗眼睛发黄。</div>)
	},
};

export default medicineData;
