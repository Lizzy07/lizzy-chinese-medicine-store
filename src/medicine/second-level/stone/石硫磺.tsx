import pic1 from "../../../images/硫磺.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "石硫磺",
	taste: ["酸"],
	chillsOrfever: "性大热",
	originPlace: "产火山地带",
	taboo: "",
	images: [pic1],
	dosage: '中硫磺毒，食鸭肉可解之。',
	appendix: "土硫磺剧毒，颜色褐色，不能内服。生用攻坚，炮制过滋补。",
	content: () => {
		return (<div>主治：补阳要药，主治脾胃虚寒，寒痹冷癖，命门火衰，能发汗以祛寒痰。能化金银铜铁奇物。温下焦肝肾之猛药。</div>)
	},
};

export default medicineData;
