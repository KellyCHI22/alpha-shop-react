import logo from '../../assets/icons/logo.svg';
import searchIcon from '../../assets/icons/search.svg';
import cartIcon from '../../assets/icons/cart.svg';
import moonIcon from '../../assets/icons/moon.svg';

export default function Header() {
  return (
    <>
      <header>
        <div className="container mx-auto">
          <nav className="grid grid-cols-12 py-3">
            <ul className="col-start-2 col-span-3 flex justify-between">
              <li>
                <a href="#">男款</a>
              </li>
              <li>
                <a href="#">女款</a>
              </li>
              <li>
                <a href="#">最新消息</a>
              </li>
              <li>
                <a href="#">客製商品</a>
              </li>
              <li>
                <a href="#">聯絡我們</a>
              </li>
            </ul>

            <a className="col-start-6 col-span-2 mx-auto" href="#">
              <img src={logo} alt="logo-img" />
            </a>

            <ul className="col-start-10 col-span-2 flex justify-end gap-6">
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
          </nav>
        </div>
      </header>
    </>
  );
}