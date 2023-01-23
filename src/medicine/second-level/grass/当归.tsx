import pic1 from "../../../images/当归.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "当归",
	taste: ["甘", "苦", "辛"],
	chillsOrfever: "性温",
	originPlace: "陕西四川为最良",
	taboo: "",
	images: [pic1],
	dosage: '',
	appendix: "妇科病几乎都在用当归。当归有油脂在里面，有润燥通便的效果。治疗肝病，要注意大肠，肝与大肠相连。",
	content: () => {
		return (<div>主治：补血清血要药。</div>)
	},
};

export default medicineData;
