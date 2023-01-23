import pic1 from "../../../images/百合.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "百合",
	taste: ["甘"],
	chillsOrfever: "性平",
	originPlace: "根入药",
	taboo: "",
	images: [pic1],
	dosage: '',
	appendix: "寒症（不口渴，痰淡白色）不使用，热症（干咳，口渴）使用。",
	content: () => {
		return (<div>主治：清凉退热要药，润肺宁心，清热止咳。</div>)
	},
};

export default medicineData;
