import pic1 from "../../../images/川芎.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "川芎",
	taste: ["辛"],
	chillsOrfever: "性温",
	originPlace: "四川陕西及江南各地",
	taboo: "其性疏散，不宜久服，反能损肝，畏黄连，伏雄黄",
	images: [pic1],
	dosage: '普通三分至半钱',
	appendix: "川芎之味更辛苦于当归，得木火之性尤烈，苦而兼辛，有生血之功，专注于心肝之血。",
	content: () => {
		return (<div>主治：【顺气】【行血】要药。头痛及妇女一切气郁血郁，心腹痛，腰脚软。破宿血，养新血，补肝散风。</div>)
	},
};

export default medicineData;
