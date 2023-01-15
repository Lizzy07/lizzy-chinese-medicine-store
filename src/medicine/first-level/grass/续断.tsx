import pic1 from "../../../images/续断.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "续断",
	taste: ["苦"],
	chillsOrfever: "性微温",
	originPlace: "山西陕西四川一带",
	taboo: "",
	images: [pic1],
	dosage: '普通二钱至三四钱',
	appendix: "此物多筋，主接筋骨。",
	content: () => {
		return (<div>主治：【伤科】骨折、肌肉拉伤。活血化瘀，妇人乳难，乳癌，乳房肿块。</div>)
	},
};

export default medicineData;
