import pic1 from "../../../images/栀子.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "栀子",
	taste: ["苦"],
	chillsOrfever: "性寒",
	originPlace: "四川尤多产",
	taboo: "",
	images: [pic1],
	dosage: '',
	appendix: "",
	content: () => {
		return (<div>主治：泻火要药，心烦。旁治发黄。</div>)
	},
};

export default medicineData;
