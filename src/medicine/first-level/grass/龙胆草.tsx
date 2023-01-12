import pic1 from "../../../images/龙胆草.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "龙胆草",
	taste: ["苦", "涩"],
	chillsOrfever: "性大寒",
	originPlace: "",
	taboo: "胃虚血少，病虚有热均忌",
	images: [pic1],
	dosage: '普通三钱',
	appendix: "吃后大便次数会变多。酒浸则能上行，柴胡为主龙胆为使，治疗眼睛有红血丝。",
	content: () => {
		return (<div>主治：泻肝胆胃火，下焦湿热。</div>)
	},
};

export default medicineData;
