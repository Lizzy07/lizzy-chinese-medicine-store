import pic1 from "../../../images/麻黄.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "麻黄",
	taste: ["苦"],
	chillsOrfever: "性温散",
	originPlace: "山西大同为最良",
	taboo: "",
	images: [pic1],
	dosage: '',
	appendix: "不能单味药用。有脓疮，皮肤出血不要用麻黄。使用时机实肺家的实症。麻黄的根和节是止汗的，要去掉，茎才是发汗的。",
	content: () => {
		return (<div>主治：发汗解表（皮肤表面受到风寒时，毛孔闭塞，汗不能出，为表实）要药，功能退热平喘利水。主伤寒表实无汗，治肺实喘逆，通利水道。</div>)
	},
};

export default medicineData;
