import pic1 from "../../../images/吴茱萸.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "吴茱萸",
	taste: ["辛"],
	chillsOrfever: "性温",
	originPlace: "其子紧小，气味芳烈",
	taboo: "热症不要用",
	images: [pic1],
	dosage: '',
	appendix: "肝脾，肝胃太寒了，寒气往上冲，造成的头痛。常常配合干姜使用。",
	content: () => {
		return (<div>主治：温中逐寒，治心腹冷通，下焦冷气，呕吐泄痢。</div>)
	},
};

export default medicineData;
