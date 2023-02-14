import { ReactComponent as Logo } from "assets/icons/logo.svg";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-neutral-800">
      <div className="container flex flex-col items-center gap-5 px-5 py-10 text-center sm:mx-auto sm:grid sm:grid-cols-12 sm:items-start sm:gap-0 sm:px-0 sm:text-left">
        <div className="col-span-2 col-start-2 my-auto">
          <Logo />
        </div>

        <section className="col-span-2">
          <h2 className="mb-3 text-xl font-bold">客戶服務</h2>
          <div className="flex flex-col space-y-1">
            <Link href="#">運送說明</Link>
            <Link href="#">退換貨相關</Link>
            <Link href="#">付款資訊</Link>
            <Link href="#">FAQ</Link>
          </div>
        </section>

        <section className="col-span-2">
          <h2 className="mb-3 text-xl  font-bold">關於我們</h2>
          <div className="flex flex-col  space-y-1">
            <Link href="#">品牌故事</Link>
            <Link href="#">媒體聯繫</Link>
            <Link href="#">Press kit</Link>
          </div>
        </section>

        <section className="col-span-2">
          <h2 className="mb-3 text-xl  font-bold">資訊</h2>
          <div className="flex flex-col  space-y-1">
            <Link href="#">隱私權政策</Link>
            <Link href="#">Cookie</Link>
            <Link href="#">GDPR</Link>
          </div>
        </section>

        <section className="col-span-2">
          <h2 className="mb-3 text-xl  font-bold">追蹤 ALPHA Shop</h2>
          <div className="flex flex-col  space-y-1">
            <div className="text-gray-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-500">
              +886 02123-45678
            </div>
            <div className="flex justify-center gap-4 pt-1 sm:justify-start">
              <Link href="#">
                <FaFacebookF className="text-xl" />
              </Link>
              <Link href="#">
                <FaInstagram className="text-xl" />
              </Link>
              <Link href="#">
                <FaWhatsapp className="text-xl" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

function Link({ href, children }) {
  return (
    <a
      href={href}
      className="text-gray-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-500"
    >
      {children}
    </a>
  );
}
