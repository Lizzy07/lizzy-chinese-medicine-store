import pic1 from "../../../images/茯苓.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "茯苓",
	taste: ["甘"],
	chillsOrfever: "性平",
	originPlace: "云南及各省山中大松树下，年久而巨大者良",
	taboo: "",
	images: [pic1],
	dosage: '钱半至四钱，大剂量二三两',
	appendix: "主悸及肉瞬筋惕也（心悸、眼皮跳等）",
	content: () => {
		return (<div>主治：【利水】【行痰】。</div>)
	},
};

export default medicineData;
