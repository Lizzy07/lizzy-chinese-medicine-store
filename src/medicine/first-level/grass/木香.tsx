import pic1 from "../../../images/木香.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "木香",
	taste: ["辛", "苦"],
	chillsOrfever: "性温",
	originPlace: "云南贵州两广皆出产",
	taboo: "热症禁用",
	images: [pic1],
	dosage: '普通五分至两钱',
	appendix: "行气，也可以是膀胱的小便不利",
	content: () => {
		return (<div>主治：开胃调气要药，行三焦之气。胃的寒湿（舌苔厚【湿】白【寒】）气滞。</div>)
	},
};

export default medicineData;
