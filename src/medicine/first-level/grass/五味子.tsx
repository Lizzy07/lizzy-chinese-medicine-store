import pic1 from "../../../images/五味子.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "五味子",
	taste: ["酸"],
	chillsOrfever: "性温",
	originPlace: "北五位最良，子赤黑色",
	taboo: "咳初起脉数，有实火，及肝家有动气，肺气有实热，及一切停饮，均忌",
	images: [pic1],
	dosage: '普通五分至一钱。大剂量倍用',
	appendix: "肺寒气逆宜与干姜同治之，有痰加半夏，喘加阿胶",
	content: () => {
		return (<div>主治：【肺虚】咳逆上气要药，主【敛肺滋肾】，祛痰止咳，生津止渴，敛汗退热，治劳伤，补不足。</div>)
	},
};

export default medicineData;
