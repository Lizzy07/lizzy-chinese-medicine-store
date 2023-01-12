import pic1 from "../../../images/细辛.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "细辛",
	taste: ["辛"],
	chillsOrfever: "性温",
	originPlace: "陕西，北方",
	taboo: "热症忌用",
	images: [pic1],
	dosage: '普通三分至一钱',
	appendix: "",
	content: () => {
		return (<div>主治：风痛要药，功能深入散风祛寒，主治咳逆上气，风湿，痹通，头痛，齿痛，泄热破痰，开窍行水。</div>)
	},
};

export default medicineData;
