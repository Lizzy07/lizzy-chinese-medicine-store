import pic1 from "../../../images/知母.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "知母",
	taste: ["苦"],
	chillsOrfever: "性寒",
	originPlace: "",
	taboo: "",
	images: [pic1],
	dosage: '',
	appendix: "阳明热症时使用，虚寒时不能用。能清气分之热（是肺里面的热，血分的热是心脏血管里面的热）。",
	content: () => {
		return (<div>主治：清凉解热要药，功能泻肺火，清胃火，下水消肿，利二便。</div>)
	},
};

export default medicineData;
