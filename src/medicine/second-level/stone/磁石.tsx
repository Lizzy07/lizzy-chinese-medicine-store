import pic1 from "../../../images/磁石.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "磁石",
	taste: ["辛"],
	chillsOrfever: "性寒",
	originPlace: "",
	taboo: "",
	images: [pic1],
	dosage: '',
	appendix: "吸气困难与肾也有关，可用。磁石兼金水两性，而归于肾，故其主治肾，能自肾中吸引肺金之气，以归于根。",
	content: () => {
		return (<div>主治：补肾强阴要药，取其能引气入肾，使阴阳安宅，镇惊，明目，通耳，益精。</div>)
	},
};

export default medicineData;
