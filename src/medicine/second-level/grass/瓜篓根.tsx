import pic1 from "../../../images/瓜篓根.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "瓜篓根/天花粉",
	taste: ["甘"],
	chillsOrfever: "性微寒",
	originPlace: "产我国陕西者良，根名天花粉，实名瓜篓实",
	taboo: "",
	images: [pic1],
	dosage: '',
	appendix: "消渴、糖尿病瓜篓根，心脏病、胸闷瓜篓实",
	content: () => {
		return (<div>主治：瓜篓实为润肺降气要药，主祛痰止咳，胸闷。瓜篓根主消渴，通乳消肿。</div>)
	},
};

export default medicineData;
