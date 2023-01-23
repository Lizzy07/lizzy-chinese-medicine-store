import pic1 from "../../../images/龙骨.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "龙骨",
	taste: ["甘"],
	chillsOrfever: "性平",
	originPlace: "山西四川等处山岩中，为一种化石",
	taboo: "",
	images: [pic1],
	dosage: '两钱至三四钱',
	appendix: "常与牡蛎合用，纳肾气，收敛心神。",
	content: () => {
		return (<div>主治：内敛正气，镇纳浮阳（肺虚不能抑制心火）。主安心神辟惊烦，敛虚汗。</div>)
	},
};

export default medicineData;
