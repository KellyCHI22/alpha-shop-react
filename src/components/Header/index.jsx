import logo from "../../assets/icons/logo.svg";
import searchIcon from "../../assets/icons/search.svg";
import cartIcon from "../../assets/icons/cart.svg";
import moonIcon from "../../assets/icons/moon.svg";
import toggleIcon from "../../assets/icons/toggle.svg";
import { useState } from "react";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <>
      <header>
        <div className="container mx-auto px-3 sm:px-0">
          <nav className="flex flex-col py-3 sm:mx-0 sm:grid sm:grid-cols-12">
            <div
              className="absolute cursor-pointer sm:hidden"
              onClick={handleToggle}
            >
              <img src={toggleIcon} alt="toggle-icon" />
            </div>

            {toggle ? <ToggleNav /> : null}
            <a
              className="order-0 mx-auto mb-3 sm:col-span-2 sm:col-start-6 sm:mb-0"
              href="#"
            >
              <img src={logo} alt="logo-img" />
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}

function ToggleNav() {
  return (
    <>
      <ul className="order-1 flex flex-col items-center sm:order-none sm:col-span-3 sm:col-start-2 sm:flex-row sm:justify-between sm:py-0">
        <li className="w-full border-b py-5 text-center sm:w-auto sm:border-none sm:py-0 sm:text-start">
          <a href="#">男款</a>
        </li>
        <li className="w-full border-b py-5 text-center  sm:w-auto sm:border-none sm:py-0 sm:text-start">
          <a href="#">女款</a>
        </li>
        <li className="w-full border-b py-5 text-center sm:w-auto sm:border-none sm:py-0 sm:text-start">
          <a href="#">最新消息</a>
        </li>
        <li className="w-full border-b py-5 text-center sm:w-auto sm:border-none sm:py-0 sm:text-start">
          <a href="#">聯絡我們</a>
        </li>
        <li className="w-full border-b py-5 text-center sm:w-auto sm:border-none sm:py-0 sm:text-start">
          <a href="#">客製商品</a>
        </li>
      </ul>

      <ul className="order-2 flex justify-center gap-8 py-5 sm:col-span-2 sm:col-start-10 sm:justify-end sm:py-0">
        <li>
          <img src={searchIcon} alt="search-icon" />
        </li>
        <li>
          <img src={cartIcon} alt="cart-icon" />
        </li>
        <li id="theme-toggle">
          <img src={moonIcon} alt="moon-icon" />
        </li>
      </ul>
    </>
  );
}
