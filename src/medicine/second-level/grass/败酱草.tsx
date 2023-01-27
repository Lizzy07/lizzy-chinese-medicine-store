import pic1 from "../../../images/败酱草.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "败酱草",
	taste: ["苦"],
	chillsOrfever: "性平",
	originPlace: "",
	taboo: "",
	images: [pic1],
	dosage: '',
	appendix: "腹膜炎",
	content: () => {
		return (<div>主治：赤眼，障膜，弩肉，聤耳，消肿结热，破凝聚血，化脓为水。</div>)
	},
};

export default medicineData;
