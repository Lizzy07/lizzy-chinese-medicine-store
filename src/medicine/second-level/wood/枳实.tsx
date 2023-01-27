import pic1 from "../../../images/枳实.jpg";
import pic2 from "../../../images/枳壳.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "枳实",
	taste: ["苦"],
	chillsOrfever: "性寒",
	originPlace: "陕西河南等地。早采者为枳实，皮厚而中坚；晚采者为枳壳，皮薄而中虚。",
	taboo: "",
	images: [pic1, pic2],
	dosage: '',
	appendix: "枳壳为木实，有木之质，木能疏土，故归脾胃，其味比厚朴（入脾）轻，故理胃气。",
	content: () => {
		return (<div>主治：破气行痰要药。</div>)
	},
};

export default medicineData;
