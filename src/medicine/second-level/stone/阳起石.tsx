import pic1 from "../../../images/阳起石.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "阳起石",
	taste: ["咸"],
	chillsOrfever: "性温",
	originPlace: "",
	taboo: "",
	images: [pic1],
	dosage: '',
	appendix: "非虚寒者忌",
	content: () => {
		return (<div>主治：补命门壮阳道要药，功能疗阴痿，男女下部虚冷，补不足。</div>)
	},
};

export default medicineData;
