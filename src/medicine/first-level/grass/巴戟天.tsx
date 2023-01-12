import pic1 from "../../../images/巴戟天.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "巴戟天",
	taste: ["辛","甘"],
	chillsOrfever: "性微温",
	originPlace: "四川最好",
	taboo: "有虚火者禁忌",
	images: [pic1],
	dosage: '普通一钱至三钱',
	appendix: "",
	content: () => {
		return (<div>主治：阳痿遗精滑精，补气益精要药。里虚/阳虚导致的受风，水肿。</div>)
	},
};

export default medicineData;
