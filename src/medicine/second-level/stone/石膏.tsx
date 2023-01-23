import pic1 from "../../../images/石膏.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "石膏",
	taste: ["甘", "辛"],
	chillsOrfever: "性大寒",
	originPlace: "浙江江苏山东等地",
	taboo: "伤寒中风太阳症，少阳症之寒热往来等均忌，真寒假热之症或因里虚引起之虚热症亦忌。",
	images: [pic1],
	dosage: '普通三钱至五钱，大剂量二三两。',
	appendix: "寒水石。用棉布包起来。阳明病--> 但热不寒。辛甘-> 阳药。石膏（白虎）、麻黄（青龙）、大枣（朱雀）、附子（玄武）。",
	content: () => {
		return (<div>主治：清凉解热要药，主治肺胃三焦气分之热，大渴狂热，能解肌发汗，又能清热止汗。</div>)
	},
};

export default medicineData;
