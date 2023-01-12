import pic1 from "../../../images/青黛.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "青黛",
	taste: ["咸"],
	chillsOrfever: "性寒",
	originPlace: "从属于大青科名蓝草者之蓝叶制出",
	taboo: "",
	images: [pic1],
	dosage: '普通三分至半钱',
	appendix: "可外敷可内服。内服生用，直接用水冲服",
	content: () => {
		return (<div>主治：解散热毒要药。并敷热疮虫咬，头生黄水疮。</div>)
	},
};

export default medicineData;
