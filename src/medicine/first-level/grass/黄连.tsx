import pic1 from "../../../images/黄连.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "黄连",
	taste: ["苦"],
	chillsOrfever: "性极寒",
	originPlace: "四川者良，雅州者尤可贵，云南及它省也有。",
	taboo: "",
	images: [pic1],
	dosage: '普通一钱至三钱',
	appendix: "",
	content: () => {
		return (<div>主治：【清火】【除湿】【健胃】要药。解热毒，益肝胆，厚肠胃。</div>)
	},
};

export default medicineData;
