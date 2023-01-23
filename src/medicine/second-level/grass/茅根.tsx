import pic1 from "../../../images/茅根.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "茅根",
	taste: ["甘"],
	chillsOrfever: "性寒",
	originPlace: "",
	taboo: "微寒（胃口很小，吃一点点就饱了，不爱吃饭）脾湿不能用",
	images: [pic1],
	dosage: '钱半至钱三',
	appendix: "",
	content: () => {
		return (<div>主治：止血利尿要药。止吐血行淤血，治消渴水肿，不伤胃气。</div>)
	},
};

export default medicineData;
