import pic1 from "../../../images/辛夷花.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "辛夷花",
	taste: ["辛"],
	chillsOrfever: "性温",
	originPlace: "",
	taboo: "",
	images: [pic1],
	dosage: '一两钱',
	appendix: "鼻窦炎：辛夷（发散）+石菖蒲（下水利尿）+苍术（收辛夷发散的湿气）",
	content: () => {
		return (<div>主治：升阳治上要药。头脑各病，鼻塞鼻渊。</div>)
	},
};

export default medicineData;
