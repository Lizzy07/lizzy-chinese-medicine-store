import pic1 from "../../../images/远志.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "远志",
	taste: ["苦"],
	chillsOrfever: "性温",
	originPlace: "陕西河南",
	taboo: "凡心经有实火为心家实热（舌头伸出来黄湿或干燥，或者有裂纹，心脏的脉搏，左侧脉，强硬）应用黄连生地，心火不足（恶寒，手脚冰冷）时才用远志。",
	images: [pic1],
	dosage: '普通八分至二三钱',
	appendix: "1、杀天雄附子乌头毒（毒会使心脏不舒服）。2、心脏跳很快（可用茯苓或远志）。3、远志性与桂枝同，但桂枝通达四肢（四肢末梢有麻刺痛），但远志主要是心脏，散心之滞血，补心火。",
	content: () => {
		return (<div>主治：强心、益智要药。治疗心脏病好用。</div>)
	},
};

export default medicineData;
