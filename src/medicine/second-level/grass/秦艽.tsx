import pic1 from "../../../images/秦艽.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "苦参",
	taste: ["苦", "辛"],
	chillsOrfever: "性平",
	originPlace: "陕西河南河北等地",
	taboo: "",
	images: [pic1],
	dosage: '',
	appendix: "",
	content: () => {
		return (<div>主治：风湿要药。</div>)
	},
};

export default medicineData;
