import pic1 from "../../../images/柴胡.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "柴胡",
	taste: ["苦"],
	chillsOrfever: "性平",
	originPlace: "分南北两种，银柴胡，用于骨蒸更佳。",
	taboo: "",
	images: [pic1],
	dosage: '普通八分至一钱，大剂三四钱',
	appendix: "凡两胁肋骨痛，多是肝胆热旺，宜用小柴胡汤。加青皮川穹白芍，左边胁痛宜活血行气，右边胁痛宜消食行痰，因胁痛须开郁，故加柴胡则皆宜也",
	content: () => {
		return (<div>主治：发表清热要药，功能散三焦肝胆诸经之邪热。热劳骨蒸烦疼。</div>)
	},
};

export default medicineData;
