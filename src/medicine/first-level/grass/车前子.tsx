import pic1 from "../../../images/车前子.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "车前子",
	taste: ["甘"],
	chillsOrfever: "性寒",
	originPlace: "处处有之",
	taboo: "",
	images: [pic1],
	dosage: '普通半钱至三钱',
	appendix: "吃多了会伤肾气，肾虚者慎用，体内虚寒慎用（频繁小便，每天二三十次，每次小便色淡白量少不痛，每次都有小便没有排干净的感觉）",
	content: () => {
		return (<div>主治：湿热性的小便不利（频繁小便，每天二三十次，每次小便有刺痛，色黄味道重）。行水泄热要药。主利小便。</div>)
	},
};

export default medicineData;
