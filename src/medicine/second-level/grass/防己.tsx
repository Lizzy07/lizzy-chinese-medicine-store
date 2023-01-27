import pic1 from "../../../images/防己.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "防己",
	taste: ["辛", "苦"],
	chillsOrfever: "性寒",
	originPlace: "用木防己",
	taboo: "",
	images: [pic1],
	dosage: '',
	appendix: "",
	content: () => {
		return (<div>主治：通膀胱利小便要药。主行全身祛风行水，泻下焦血分湿热。</div>)
	},
};

export default medicineData;
