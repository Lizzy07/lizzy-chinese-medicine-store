import pic1 from "../../../images/贝母.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "贝母",
	taste: ["辛", "苦"],
	chillsOrfever: "性平",
	originPlace: "",
	taboo: "",
	images: [pic1],
	dosage: '',
	appendix: "",
	content: () => {
		return (<div>主治：祛痰止咳要药，功能散结泄热，润肺清火。治烦热疮疡（外用）。</div>)
	},
};

export default medicineData;
