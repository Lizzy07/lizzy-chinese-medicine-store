import pic1 from "../../../images/黄芩.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "黄芩",
	taste: ["苦"],
	chillsOrfever: "性平",
	originPlace: "",
	taboo: "",
	images: [pic1],
	dosage: '下热痢（又湿又臭）用，下寒痢（大便不臭，吃玉米拉玉米，消化不了）不用',
	appendix: "",
	content: () => {
		return (<div>主治：清热要药。黄疸。去肝胆火，下热利，呕吐，心下痞。</div>)
	},
};

export default medicineData;
