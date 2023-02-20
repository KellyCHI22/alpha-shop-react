import { ReactComponent as Logo } from "assets/icons/logo.svg";
import { ReactComponent as ToggleIcon } from "assets/icons/toggle.svg";
import { ReactComponent as SearchIcon } from "assets/icons/search.svg";
import { ReactComponent as CartIcon } from "assets/icons/cart.svg";
import { ReactComponent as MoonIcon } from "assets/icons/moon.svg";
import { ReactComponent as SunIcon } from "assets/icons/sun.svg";
import { useState, useContext } from "react";
import { ThemeContext } from "App";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const mediaQuery = window.matchMedia("(min-width: 640px)");
  if (mediaQuery.matches && isMenuOpen === false) {
    setIsMenuOpen(true);
  }

  return (
    <>
      <header>
        <div className="container fixed top-0 z-10 mx-auto bg-white px-3 shadow-sm dark:bg-neutral-900 sm:px-0">
          <nav className="flex flex-col py-3 sm:mx-0 sm:grid sm:grid-cols-12">
            <div
              className="absolute cursor-pointer text-2xl sm:hidden"
              onClick={handleMenuOpen}
            >
              <ToggleIcon />
            </div>
            {isMenuOpen && <ToggleNav />}
            <a
              className="order-0 mx-auto mb-3 sm:col-span-2 sm:col-start-6 sm:mb-0"
              href="#"
            >
              <Logo className="text-orange-500" />
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
          <SearchIcon />
        </li>
        <li className="text-2xl">
          <CartIcon />
        </li>
        <li className="cursor-pointer text-2xl" onClick={toggleTheme}>
          {theme === "light" ? <MoonIcon /> : <SunIcon />}
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
