import pic1 from "../../../images/丹皮.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "丹皮",
	taste: ["辛", "苦"],
	chillsOrfever: "性微寒",
	originPlace: "",
	taboo: "入血凉血能行血，凡女子血崩，及经血过期不尽，均忌与行血药同用。",
	images: [pic1],
	dosage: '',
	appendix: "牡丹皮",
	content: () => {
		return (<div>主治：理血要药。功能清伏火，凉血热，通月经，排淤血。主治胎前产后，冷热气血之病，为妇科良剂。</div>)
	},
};

export default medicineData;
