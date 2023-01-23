import pic1 from "../../../images/陈皮.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "陈皮",
	taste: ["苦", "辛"],
	chillsOrfever: "性温",
	originPlace: "广东",
	taboo: "",
	images: [pic1],
	dosage: '一钱至三钱',
	appendix: "",
	content: () => {
		return (<div>主治：宣通疏利要药。下气（打嗝），可降上焦与中焦之气。</div>)
	},
};

export default medicineData;
