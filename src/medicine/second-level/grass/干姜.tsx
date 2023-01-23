import pic1 from "../../../images/干姜.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "干姜",
	taste: ["辛"],
	chillsOrfever: "性温",
	originPlace: "",
	taboo: "",
	images: [pic1],
	dosage: '',
	appendix: "一直咳嗽，口渴（热），不口渴（寒）。咳血要用干姜。肺是阳气聚集的地方，一个人有没有力气跟他的肺有关系。手太阴肺经过大拇指，大拇指力气最大。温肺，则阳气会起来。所以回阳救逆会用到干姜。",
	content: () => {
		return (<div>主治：除寒散结要药，治四肢逆冷。胸满咳逆上气，温中止血，珠汗，逐风湿痹。</div>)
	},
};

export default medicineData;
