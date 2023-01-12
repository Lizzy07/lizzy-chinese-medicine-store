import pic1 from "../../../images/防风.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "防风",
	taste: ["甘", "辛"],
	chillsOrfever: "性温",
	originPlace: "蒙古及山西河南等地，根黄白色，入药",
	taboo: "",
	images: [pic1],
	dosage: '普通一钱至三钱',
	appendix: "风湿关节炎良药",
	content: () => {
		return (<div>主治：【伤风】【头痛】要药。功能散表发汗，散风胜湿。散肌肉风寒。</div>)
	},
};

export default medicineData;
