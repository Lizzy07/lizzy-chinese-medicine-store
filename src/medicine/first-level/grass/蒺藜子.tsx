import pic1 from "../../../images/蒺藜子.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "蒺藜子",
	taste: ["苦"],
	chillsOrfever: "性温",
	originPlace: "",
	taboo: "",
	images: [pic1],
	dosage: '',
	appendix: "【白蒺藜】可以治疗眼球凹陷，及睛生障翳，视物模糊",
	content: () => {
		return (<div>主治：主恶（è）血（指瘀血，坏血，因病损而郁积的血），破症结积聚（肿块结节），喉痹（咽部红肿疼痛，或干燥、异物感，或咽痒不适，吞咽不利等），乳难（乳房有结节肿块）</div>)
	},
};

export default medicineData;
