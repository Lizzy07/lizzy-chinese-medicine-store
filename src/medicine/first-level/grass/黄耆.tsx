import pic1 from "../../../images/黄耆.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "黄耆/黄芪",
	taste: ["甘"],
	chillsOrfever: "性微温",
	originPlace: "山西陕西",
	taboo: "",
	images: [pic1],
	dosage: '普通钱半至三钱，大剂量一二两',
	appendix: "大补脾（实脾），通利三焦（利水）。怀孕期间，要气虚血旺，则安胎。快到临盆时，气旺血衰，则下胎，生啦。",
	content: () => {
		return (<div>主治：【补气】【利水】要药，助肺气，实皮毛，升清气，泻火气，补虚损五劳，痘疮不起，拖毒止痛。</div>)
	},
};

export default medicineData;
