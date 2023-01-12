import pic1 from "../../../images/薏以仁.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "薏以仁",
	taste: ["甘", "淡"],
	chillsOrfever: "性微寒",
	originPlace: "",
	taboo: "大便燥结，因寒抽筋",
	images: [pic1],
	dosage: '普通三钱至六钱',
	appendix: "薏仁根--主下三焦，能堕胎，治黄疸，卒心腹烦满，胸胁痛",
	content: () => {
		return (<div>主治：除湿行水，健胃补肺要药。湿热抽筋。</div>)
	},
};

export default medicineData;
