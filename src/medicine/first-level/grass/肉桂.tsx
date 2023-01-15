import pic1 from "../../../images/肉桂.jpeg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "肉桂/小桂",
	taste: ["辛", "甘"],
	chillsOrfever: "性大热",
	originPlace: "云南两广，皮入药",
	taboo: "",
	images: [pic1],
	dosage: '',
	appendix: "",
	content: () => {
		return (<div>主治：温补要药，主扶火助阳，温中逐寒，能引火归元，治上热下寒。</div>)
	},
};

export default medicineData;
