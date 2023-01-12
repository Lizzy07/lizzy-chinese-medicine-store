import pic1 from "../../../images/泽泻.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "泽泻",
	taste: ["甘", "咸"],
	chillsOrfever: "性寒",
	originPlace: "",
	taboo: "阴虚者忌用",
	images: [pic1],
	dosage: '普通一钱至三钱',
	appendix: "",
	content: () => {
		return (<div>主治：渗湿利尿。入肾经，去旧水（眼皮跳），养新水，利小便，消肿胀，渗泄止渴。</div>)
	},
};

export default medicineData;
