export default function Header() {
  return (
    <>
      <header className="site-header">
        <div className="header-container mx-auto">
          {/* navbar-toggle */}
          <input id="navbar-toggle" className="navbar-toggle" type="checkbox" />
          <label htmlFor="navbar-toggle" className="burger-container">
            <svg className="icon-toggle cursor-point">
              <use xlinkHref="#svg-icon-toggle" />
            </svg>
          </label>
          {/* navbar-menu */}
          <nav className="navbar-menu">
            <ul className="nav-list site-menu-list mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  男款
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  女款
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  最新消息
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  客製商品
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  聯絡我們
                </a>
              </li>
            </ul>
            <ul className="nav-list site-action-list">
              {/* search */}
              <li className="nav-item">
                <svg className="nav-icon cursor-point">
                  <use xlinkHref="#svg-icon-search" />
                </svg>
              </li>
              {/* cart */}
              <li className="nav-item">
                <svg className="nav-icon cursor-point">
                  <use xlinkHref="#svg-icon-cart" />
                </svg>
              </li>
              <li id="theme-toggle" className="nav-item">
                {/* moon */}
                <svg className="nav-icon cursor-point">
                  <use xlinkHref="#svg-icon-moon" />
                </svg>
                {/* sun */}
                <svg className="nav-icon cursor-point">
                  <use xlinkHref="#svg-icon-sun" />
                </svg>
              </li>
            </ul>
          </nav>
          {/* logo */}
          <a className="header-logo-container" href="#">
            <svg className="icon-logo cursor-point">
              <use xlinkHref="#svg-icon-logo" />
            </svg>
          </a>
        </div>
      </header>
    </>
  );
}