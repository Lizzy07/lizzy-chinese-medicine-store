import pic1 from "../../../images/雄黄.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "雄黄",
	taste: ["辛", "苦"],
	chillsOrfever: "性温",
	originPlace: "",
	taboo: "",
	images: [pic1],
	dosage: '普通内服数分，外用无定量',
	appendix: "雄黄加热变砒霜",
	content: () => {
		return (<div>主治：蚀疮杀虫要药，解毒，为外科要剂。</div>)
	},
};

export default medicineData;
