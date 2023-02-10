import logo from "../../assets/icons/logo.svg";
import facebookIcon from "../../assets/icons/facebook.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import whatsappIcon from "../../assets/icons/whatsapp.svg";

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto grid grid-cols-12 py-10">
        <div className="col-span-2 col-start-2 my-auto">
          <img src={logo} alt="logo-img" />
        </div>

        <section className="col-span-2">
          <h2 className="mb-3 text-xl font-bold">客戶服務</h2>
          <div className="flex flex-col space-y-1">
            <a className="text-gray-500" href="#">
              運送說明
            </a>
            <a className="text-gray-500" href="#">
              退換貨相關
            </a>
            <a className="text-gray-500" href="#">
              付款資訊
            </a>
            <a className="text-gray-500" href="#">
              FAQ
            </a>
          </div>
        </section>

        <section className="col-span-2">
          <h2 className="mb-3 text-xl  font-bold">關於我們</h2>
          <div className="flex flex-col  space-y-1">
            <a className="text-gray-500" href="#">
              品牌故事
            </a>
            <a className="text-gray-500" href="#">
              媒體聯繫
            </a>
            <a className="text-gray-500" href="#">
              Press kit
            </a>
          </div>
        </section>

        <section className="col-span-2">
          <h2 className="mb-3 text-xl  font-bold">資訊</h2>
          <div className="flex flex-col  space-y-1">
            <a className="text-gray-500" href="#">
              隱私權政策
            </a>
            <a className="text-gray-500" href="#">
              Cookie
            </a>
            <a className="text-gray-500" href="#">
              GDPR
            </a>
          </div>
        </section>

        <section className="col-span-2">
          <h2 className="mb-3 text-xl  font-bold">追蹤 ALPHA Shop</h2>
          <div className="flex flex-col  space-y-1">
            <div className="text-gray-500">+886 02123-45678</div>
            <div className="flex gap-4">
              <a href="#">
                <img src={facebookIcon} alt="facebookIcon" />
              </a>
              <a href="#">
                <img src={instagramIcon} alt="instagramIcon" />
              </a>
              <a href="#">
                <img src={whatsappIcon} alt="whatsappIcon" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
