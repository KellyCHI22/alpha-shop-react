import productOne from "../assets/images/product-1.jpg";
import productTwo from "../assets/images/product-2.jpg";

const genders = [
  { label: "先生", value: "mr" },
  { label: "女士", value: "ms" },
  { label: "不明", value: "mx" },
];

const cities = [
  { value: "", label: "請選擇縣市" },
  { value: "TPH", label: "新北市" },
  { value: "TPE", label: "臺北市" },
  { value: "KLU", label: "基隆市" },
  { value: "TYC", label: "桃園市" },
  { value: "HSH", label: "新竹縣" },
  { value: "HSC", label: "新竹市" },
  { value: "MAC", label: "苗栗市" },
  { value: "MAL", label: "苗栗縣" },
  { value: "TXG", label: "臺中市" },
  { value: "CWH", label: "彰化縣" },
  { value: "CWS", label: "彰化市" },
  { value: "NTC", label: "南投市" },
  { value: "NTO", label: "南投縣" },
  { value: "YLH", label: "雲林縣" },
  { value: "CHY", label: "嘉義縣" },
  { value: "CYI", label: "嘉義市" },
  { value: "TNN", label: "臺南市" },
  { value: "KHH", label: "高雄市" },
  { value: "IUH", label: "屏東縣" },
  { value: "PTS", label: "屏東市" },
  { value: "ILN", label: "宜蘭縣" },
  { value: "ILC", label: "宜蘭市" },
  { value: "HWA", label: "花蓮縣" },
  { value: "HWC", label: "花蓮市" },
  { value: "TTC", label: "臺東市" },
  { value: "TTT", label: "臺東縣" },
  { value: "PEH", label: "澎湖縣" },
  { value: "KMN", label: "金門縣" },
  { value: "LNN", label: "連江縣" },
];

const cartItems = [
  {
    name: "破壞補丁修身牛仔褲",
    img: productOne,
    quantity: 1,
    price: 3999,
  },
  {
    name: "刷色直筒牛仔褲",
    img: productTwo,
    quantity: 1,
    price: 1299,
  },
];

const dummyItems = [
  {
    id: "1",
    name: "貓咪罐罐",
    img: "http://placekitten.com/300/300",
    price: 100,
    quantity: 2,
  },
  {
    id: "2",
    name: "貓咪干干",
    img: "http://placekitten.com/400/400/",
    price: 200,
    quantity: 1,
  },
];

export { cities, genders, cartItems, dummyItems };
