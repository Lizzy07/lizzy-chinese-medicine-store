import pic1 from "../images/益母草.png";
import { MedicineType } from './common';

const medicineData: MedicineType = {
	name: "益母草/充蔚子",
	taste: ["辛", "苦"],
	chillsOrfever: "性微寒",
	originPlace: "原野及近水处",
	taboo: "孕妇忌用",
	images: [pic1],
	appendix: "",
	content: () => {
		return (<div>主治：明目，去淤，通调月经</div>)
	},
};

export default medicineData;
