import pic1 from "../../../images/卷柏.jpeg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "卷柏",
	taste: ["辛"],
	chillsOrfever: "性温",
	originPlace: "陕西山东",
	taboo: "",
	images: [pic1],
	dosage: '普通一钱至三钱',
	appendix: "主五脏邪气，女子阴中寒热痛、症瘕（子宫肿瘤）、血闭、绝子",
	content: () => {
		return (<div>主治：卷柏生用，主破血通月经。炙用性温，止血。</div>)
	},
};

export default medicineData;
