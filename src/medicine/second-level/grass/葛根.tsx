import pic1 from "../../../images/葛根.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "葛根",
	taste: ["甘"],
	chillsOrfever: "性平",
	originPlace: "江浙尤多",
	taboo: "",
	images: [pic1],
	dosage: '',
	appendix: "1、项背强（太阳症，温病）。2、有汗无汗。有汗可用葛根，表示是得之于表虚（麻黄是用于表实，整个毛孔闭塞了）的病。3、升麻是升气不升精。桂枝解营卫（肌肉之间的问题）",
	content: () => {
		return (<div>主治：提升精液。发汗解肌升阳散火要药，主消渴大热，伤寒中风，治头痛，泻泄，开胃气。</div>)
	},
};

export default medicineData;
