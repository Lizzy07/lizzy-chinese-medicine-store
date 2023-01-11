import pic1 from "../../../images/独活.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "独活",
	taste: ["辛", "苦"],
	chillsOrfever: "性温",
	originPlace: "四川山西甘肃的独活，根老而气细，或西羌的羌活，根嫩而气雄",
	taboo: "",
	images: [pic1],
	dosage: '普通一钱至三钱',
	appendix: "不适合虚痛，适合实痛。",
	content: () => {
		return (<div>主治：风痛。收肝风，泻肝气。</div>)
	},
};

export default medicineData;
