import pic1 from "../../../images/续断.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "",
	taste: [],
	chillsOrfever: "性",
	originPlace: "",
	taboo: "",
	images: [pic1],
	dosage: '',
	appendix: "",
	content: () => {
		return (<div>主治：。</div>)
	},
};

export default medicineData;
