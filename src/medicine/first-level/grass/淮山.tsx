import pic1 from "../../../images/淮山.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "淮山",
	taste: ["甘"],
	chillsOrfever: "性平",
	originPlace: "河南",
	taboo: "不宜与面同食",
	images: [pic1],
	dosage: '普通半钱至三钱',
	appendix: "味甘有液，得土之湿气，功能补脾阴。因其色白，得土中之金气，故益肺，带酸之性兼入肝肺",
	content: () => {
		return (<div>主治：补虚扶弱要药，主益肺脾，清虚热，长肌肉</div>)
	},
};

export default medicineData;
