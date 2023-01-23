import pic1 from "../../../images/紫苑.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "紫苑",
	taste: ["苦", "辛"],
	chillsOrfever: "性温",
	originPlace: "",
	taboo: "",
	images: [pic1],
	dosage: '',
	appendix: "七分至钱半",
	content: () => {
		return (<div>主治：祛痰止咳要药，主治咳逆，痰涎，吐脓血，益肺气。</div>)
	},
};

export default medicineData;
