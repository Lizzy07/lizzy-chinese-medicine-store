import pic1 from "../../../images/漏芦.jpeg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "漏芦",
	taste: ["苦", "咸"],
	chillsOrfever: "性寒",
	originPlace: "向阳之地之草木植物，根苗皆入药",
	taboo: "妊娠禁用，疮疡阴症平塌不起者，真气虚也，法当内塞（用防风和黄耆行气、炮附子（可补足不足的地方）和白术排脓），漏芦苦寒，非所投宜。",
	images: [pic1],
	dosage: '普通一钱至三钱',
	appendix: "",
	content: () => {
		return (<div>主治：皮肤【热】，【炎症】，恶疮，痔疮，下乳汁（可预防乳癌）。</div>)
	},
};

export default medicineData;
