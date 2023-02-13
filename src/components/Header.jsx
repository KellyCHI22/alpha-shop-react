import { ReactComponent as Logo } from "assets/icons/logo.svg";
import { ReactComponent as ToggleIcon } from "assets/icons/toggle.svg";
import searchIcon from "assets/icons/search.svg";
import cartIcon from "assets/icons/cart.svg";
import moonIcon from "assets/icons/moon.svg";
import { useState } from "react";

export default function Header() {
  const [toggle, setToggle] = useState(true);
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
              <ToggleIcon />
            </div>

            {toggle ? <ToggleNav /> : null}
            <a
              className="order-0 mx-auto mb-3 sm:col-span-2 sm:col-start-6 sm:mb-0"
              href="#"
            >
              <Logo />
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
        <ToggleNavLink href="#">男款</ToggleNavLink>
        <ToggleNavLink href="#">女款</ToggleNavLink>
        <ToggleNavLink href="#">最新消息</ToggleNavLink>
        <ToggleNavLink href="#">聯絡我們</ToggleNavLink>
        <ToggleNavLink href="#">客製商品</ToggleNavLink>
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

function ToggleNavLink({ href, children }) {
  return (
    <li className="w-full border-b py-5 text-center hover:text-orange-500 sm:w-auto sm:border-none sm:py-0 sm:text-start">
      <a href={href}>{children}</a>
    </li>
  );
}
