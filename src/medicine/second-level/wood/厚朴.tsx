import pic1 from "../../../images/厚朴.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "厚朴",
	taste: ["苦", "辛"],
	chillsOrfever: "性温",
	originPlace: "四川尤多产",
	taboo: "",
	images: [pic1],
	dosage: '',
	appendix: "厚朴入脾、大肠（恢复大肠蠕动，降气行气），枳实入小肠。味轻的大部分入腑，味厚的入脏。",
	content: () => {
		return (<div>主治：下实散满，温中，下气。</div>)
	},
};

export default medicineData;
