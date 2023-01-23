import pic1 from "../../../images/柏子仁.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "柏子仁",
	taste: ["甘"],
	chillsOrfever: "性平",
	originPlace: "",
	taboo: "吃多了会下痢（拉肚子）",
	images: [pic1],
	dosage: '普通一钱至三钱',
	appendix: "",
	content: () => {
		return (<div>主治：滋润要药。主养心气，润肾燥，润肝（眼睛干燥）。</div>)
	},
};

export default medicineData;
