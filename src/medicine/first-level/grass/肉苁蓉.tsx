import pic1 from "../../../images/肉苁蓉.jpeg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "肉苁蓉",
	taste: ["甘", "酸", "咸"],
	chillsOrfever: "性温",
	originPlace: "生于各种高山，为一种寄生植物，茎富肉质，叶细如鳞",
	taboo: "",
	images: [pic1],
	dosage: '普通二钱至四钱',
	appendix: "阳药，味咸入肾",
	content: () => {
		return (<div>主治：益髓壮阳要药，功能治精血不足，阳痿不举，女子绝产阴痛，润燥，滑大肠。</div>)
	},
};

export default medicineData;
