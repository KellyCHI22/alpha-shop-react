import { ReactComponent as Logo } from "assets/icons/logo.svg";
import { HiMenuAlt2 as ToggleMenu } from "react-icons/hi";
import {
  BsSearch as Search,
  BsCart3 as Cart,
  BsBrightnessHigh as Light,
  BsMoon as Moon,
} from "react-icons/bs";
import { useState, useContext } from "react";
import { ThemeContext } from "App";

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
              className="absolute cursor-pointer text-2xl sm:hidden"
              onClick={handleToggle}
            >
              <ToggleMenu />
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
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <ul className="order-1 flex flex-col items-center sm:order-none sm:col-span-3 sm:col-start-2 sm:flex-row sm:justify-between sm:py-0">
        <ToggleNavLink href="#">男款</ToggleNavLink>
        <ToggleNavLink href="#">女款</ToggleNavLink>
        <ToggleNavLink href="#">最新消息</ToggleNavLink>
        <ToggleNavLink href="#">聯絡我們</ToggleNavLink>
        <ToggleNavLink href="#">客製商品</ToggleNavLink>
      </ul>

      <ul className="order-2 flex items-center justify-center gap-8 py-5 sm:col-span-2 sm:col-start-10 sm:justify-end sm:py-0">
        <li className="text-2xl">
          <Search />
        </li>
        <li className="text-2xl">
          <Cart />
        </li>
        <li className="cursor-pointer text-2xl" onClick={toggleTheme}>
          {theme === "light" ? <Moon /> : <Light />}
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
