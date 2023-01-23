import pic1 from "../../../images/白芍.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "白芍",
	taste: ["苦", "酸"],
	chillsOrfever: "性平",
	originPlace: "",
	taboo: "",
	images: [pic1],
	dosage: '普通两钱到五钱，大剂量一两以上',
	appendix: "入血分，收静脉血（动脉血是桂枝），脚静脉血管瘤，脚静脉曲张，肝病，阴虚。胸满不能用白芍。",
	content: () => {
		return (<div>主治：泻肝安脾，缓中去水要药。养血散淤，清热利肠，为妇科良药</div>)
	},
};

export default medicineData;
