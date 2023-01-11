import pic1 from "../../../images/玉竹.jpeg";
import pic2 from "../../../images/玉竹.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "玉竹",
	taste: ["甘"],
	chillsOrfever: "性平",
	originPlace: "山麓阴地之多年生草",
	taboo: "畏咸卤",
	images: [pic1,pic2],
	dosage: '普通二钱至四钱，大剂二三两',
	appendix: "玉肌散",
	content: () => {
		return (<div>主治：风热风湿入肌，肌肉痛。功能祛风清热，除湿止痛。久服去面黑斑。</div>)
	},
};

export default medicineData;
