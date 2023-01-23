import pic1 from "../../../images/麝香.jpg";
import { MedicineType } from '../../common';

const medicineData: MedicineType = {
	name: "麝香",
	taste: ["辛"],
	chillsOrfever: "性温",
	originPlace: "青海西藏陕西甘肃四川等地",
	taboo: "",
	images: [pic1],
	dosage: '',
	appendix: `一般毛孔闭塞者麻黄以通之，
	凑理闭塞者葛根以通之，
	荣卫闭塞者桂枝以通之，
	风塞者独活羌活以通之，
	血塞者延胡郁金以通之，
	肺气塞者桔梗前胡以通之，
	心气塞者菖蒲远志以通之，
	胃气塞者藿香川朴以通之，
	肝气塞者香附川芎以通之。
	内则经络全被遏阻之势，外则诸窍亦有闭塞之象，是故心神失其主，神智为蒙者，非麝香不可
	`,
	content: () => {
		return (<div>主治：开关通窍要药。</div>)
	},
};

export default medicineData;
