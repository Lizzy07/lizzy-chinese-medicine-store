import huaiNiuXi from "../../../images/怀牛膝.jpeg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "牛膝",
	taste: ["苦", "酸"],
	chillsOrfever: "性平",
	originPlace: "河南，四川。为山野自生之多年生草本，根入药",
	taboo: "孕妇忌用",
	dosage: "普通钱半至三钱",
	images: [huaiNiuXi],
	appendix: "杜牛膝--性专走下，毫无补益，散淤血破子宫肿瘤，止痛可用",
	content: () => {
		return (<div>主治：寒湿萎痿痹，四肢拘挛，膝痛不可屈伸</div>)
	},
};

export default medicineData;
