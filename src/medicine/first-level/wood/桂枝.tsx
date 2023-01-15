import pic1 from "../../../images/桂枝.jpeg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "桂枝",
	taste: ["辛", "甘"],
	chillsOrfever: "性温",
	originPlace: "云南两广",
	taboo: "阴虚火旺，温热大热，喉症血症均忌",
	images: [pic1],
	dosage: '普通三分至钱半',
	appendix: "",
	content: () => {
		return (<div>主治：。</div>)
	},
};

export default medicineData;
