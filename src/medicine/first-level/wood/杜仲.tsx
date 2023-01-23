import pic1 from "../../../images/杜仲.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "杜仲",
	taste: ["辛", "甘"],
	chillsOrfever: "性温",
	originPlace: "陕西四川等地，树皮中有银丝如锦，故亦名锦杜仲",
	taboo: "",
	images: [pic1],
	dosage: '两钱至三四钱，大剂量二三两',
	appendix: "产后，妇女腰酸背痛，可收妊辰纹",
	content: () => {
		return (<div>主治：健筋骨腰肾要药。胎前能安，胎后能补。</div>)
	},
};

export default medicineData;
